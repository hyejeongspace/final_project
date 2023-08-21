<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<jsp:include page="../common/header.jsp" />
<!-- <script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script> -->

<style>
/* .ck.ck-toolbar__items{
	margin-left:20vw;
}
.ck.ck-content{
	width:60%;
	min-height:500px;
	margin-left:20vw;
} */

	.fileDrop{
		width:100%;
		height:150px;
		border:1px solid gray;
		background-color:lightgray;
		margin:auto;
	}
	
	.uploadList{
		width:100%;
	}
	
	.uploadList li{
		float:left;
		padding:20px;
		list-style:none;
	}
	
	/* .tox.tox-tinymce{
		display:inline-block;
	} */
	
</style>
<div class="mainWrap">
    <h1>새 공지사항 작성하기</h1>
    <form action="newNotice" method="post" onsubmit="uploadData()" >
        <label for="title">제  목 :</label>
        <input type="text" id="title" name="title"" required><br>
		<label for="auth">작성자:</label>
        <input type="text" id="auth" name="auth" value="${vo.id}" required readonly><br>
        <label for=fixedNotice>공지 상단 고정 :</label>
        <label for="fixedNoticeT"> [ 고정 ]  </label>
        <input type="radio" name="fixedNotice" id ="fixedNoticeT" value="true"/>
        <label for="fixedNoticeF"> [ 미고정 ]  </label>
        <input type="radio" name="fixedNotice" id ="fixedNoticeF" value="false" checked="checked"/><br> 
        <label for="content">내용:</label><br>
        <textarea id="content" name="content"></textarea><br>
        <button type="submit">작성 완료</button>
        <!-- <input type="submit" value="작성"> -->
		<div>
			<label>FILE DROP HERE</label>
			<div class="fileDrop">
			
			</div>
			<div>
				<ul class="uploadList"></ul>
			</div>
		</div>
	</form>
</div> 
	
	<script src="https://cdn.tiny.cloud/1/txisexjqogc2o5hq1mpsl5obcf0exfbgxj0f053sshq2xiu1/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
	<script>
	let plugins = ["link" ,"image"];
	let edit_toolbar = "blocks fontfamily fontsize | link image forecolor backcolor"
	
	tinymce.init({
		language : "ko_KR",
		selector: '#content',
		width : 600,
		height: 500,
		menubar : false,
		plugins: plugins,
		  toolbar: edit_toolbar,
		  /* enable title field in the Image dialog*/
		  image_title: true,
		  /* enable automatic uploads of images represented by blob or data URIs*/
		  automatic_uploads: true,
		  /*
		    URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
		    images_upload_url: 'postAcceptor.php',
		    here we add custom filepicker only to Image dialog
		  */
		  file_picker_types: 'image',
		  /* and here's our custom image picker*/
		  file_picker_callback: (cb, value, meta) => {
		    const input = document.createElement('input');
		    input.setAttribute('type', 'file');
		    input.setAttribute('accept', 'image/*');

		    input.addEventListener('change', (e) => {
		      const file = e.target.files[0];

		      const reader = new FileReader();
		      reader.addEventListener('load', () => {
		        /*
		          Note: Now we need to register the blob in TinyMCEs image blob
		          registry. In the next release this part hopefully won't be
		          necessary, as we are looking to handle it internally.
		        */
		        const id = 'blobid' + (new Date()).getTime();
		        const blobCache =  tinymce.activeEditor.editorUpload.blobCache;
		        const base64 = reader.result.split(',')[1];
		        const blobInfo = blobCache.create(id, file, base64);
		        blobCache.add(blobInfo);

		        /* call the callback and populate the Title field with the file name */
		        cb(blobInfo.blobUri(), { title: file.name });
		      });
		      reader.readAsDataURL(file);
		    });

		    input.click();
		  },
		  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
		});
  </script>
  <script src="http://code.jquery.com/jquery-latest.min.js"></script>
  <script>
  	var contextPath = '${pageContext.request.contextPath}';
  </script>
  <script src="${pageContext.request.contextPath}/resources/js/upload.js"></script>
  <script>
  	$("#saveBtn").click(function(){
  		/*
  		let content = tinymce.activeEditor.getContent();
  		console.log(content);
  		*/
  		let str = "";
  		console.log("click");
  		let fileList = $(".uploadList .delBtn");
  		console.log(fileList);
  		$(fileList).each(function(){
  			str += "<input type='hidden' name='files' value='"+$(this).attr("href")+"'/>";
  		});
  		
  		$("#registerForm").append(str);
  		$("#registerForm").submit();
  	});
  	
  	// file drop 파일 첨부
  	$(".fileDrop").on("dragenter dragover" , function(e){
  		e.preventDefault();
  	});
  	
  	$(".fileDrop").on("drop", function(event){
  		event.preventDefault();
  		
  		let files = event.originalEvent.dataTransfer.files;
  		console.log(files);
  		
  		let maxSize = 10485760; // 10MB
  		
  		let formData = new FormData();
  		
  		for(let i = 0; i < files.length; i++){
  			if(files[i].size > maxSize){
  				alert("파일 용량이 너무 큽니다.");
  				return;
  			}
  			formData.append("file",files[i]);
  		}
  		
  		$.ajax({
  			type : "POST",
  			data : formData,
  			processData : false,
  			contentType : false,
  			url : contextPath+"/uploadFile",
  			dataType : "json",
  			success : function(data){
  				// upload 된 파일 이름 목록을 list로 전달
  				console.log(data);
  				
  				for(let i = 0; i < data.length; i++){
  					console.log(data[i]);
  					let fileInfo = getFileInfo(data[i]);
  					console.log(fileInfo);
  					// upload 된 파일 게시글 작성 페이지에 출력
  					let html = "<li>";
  					html += "<img src='"+fileInfo.imgSrc+"' alert='attachment'/>";
  					html += "<div>";
  					html += "<a href='"+fileInfo.getLink+"' target='_blank'>";
  					html += fileInfo.fileName
  					html += "<a/>";
  					html += "</div>"
					html += "<div>";
					// fullName
					html += "<a href='"+data[i]+"' class='delBtn'>[X]</a>";
					html += "</div>"
  					html +=	"</li>";
  					$(".uploadList").append(html);
  				}
  			}
  		});
  	}); // file drop upload end
  	
  	// 첨부파일 삭제
  	$(".uploadList").on("click",".delBtn",function(event){
  		event.preventDefault();
  		// event가 발생한 a tag 요소
  		let target = $(this);
  		// target 요소의 속성값 href == fullName
  		let fullName = target.attr("href");
  		
  		$.ajax({
  			type : "POST",
  			url : contextPath+"/deleteFile",
  			data : {
  				fileName : fullName
  			},
  			success : function(data){
  				console.log(data);
  				// target을 기준으로 부모요소들 중에
  				// 선택자로 지정된 가장 가까운 부모요소를 검색
  				target.closest("li").remove();
  			}
  		});
  	});
  	
  </script>	
<!-- <script>
	let editor;
	
    ClassicEditor
        .create( document.querySelector( '#content' ) )
        .then( newEditor => {
        editor = newEditor;
    } )
	.then( editor => {
		window.editor = editor;
	} )
    .catch( error => {
           console.error( error );
    } );
    
    function uploadData() {
    
    	const editorData = editor.getData();
    	console.log(typeof(editorData));
    	
    	var xhr = new XMLHttpRequest();
    	
    	xhr.onreadystatechange = function() {
    		if(xhr.readyState==4&&xhr.status==200) {
    			
    		}
    	}
    	xhr.open("post", "{path}/notice/newNotice", true);
    	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    	xhr.send("editorData="+editorData);
    }
   

</script> -->

<jsp:include page="../common/footer.jsp" />
