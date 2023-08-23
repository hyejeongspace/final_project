<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<jsp:include page="../common/note_header.jsp" />

<div class="mainWrap">
	
    <h1>쪽지 보내기</h1>
    
    <form action="${pageContext.request.contextPath}/note/noteWrite" method="post">
        <label for="fromId">보내는 회원</label>
        <input type="text" id="from_Id" name="from_Id" value="${sessionScope.userInfo.nname}" readonly /> <br/>
        <label for="toId">받는 사람</label>
        <input type="text" name="to_Id" name="to_Id" value="${note.to_Id}" readonly/> <br/>
        <label for="title">제목</label>
        <input type="text" name="title" placeholder="제목" /> <br/>
        <label for="content">내용</label>
      	<textarea id="editor" name="content" placeholder="내용"></textarea> <br/>
        <input type="submit" value="보내기" />
    </form>
</div>
<script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>
<script>
  ClassicEditor
    .create(document.querySelector('#editor'))
    .catch( error => {
      console.error( error );
    } );
</script>
<jsp:include page="../common/footer.jsp" />