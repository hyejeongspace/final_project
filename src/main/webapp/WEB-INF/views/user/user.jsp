<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<link rel="stylesheet" href="../resources/css/common.css">
<jsp:include page="../common/header.jsp" />
<div class="mainWrap">
    <h1>내정보 페이지</h1>
    <section class="wrap">
		<table class="info">
			<tr>
				<td>회원번호</td>
				<td>${member.idn}</td>
			</tr>
			<tr>
				<td>아이디</td>
				<td>${member.id}</td>
			</tr>
			<tr>
				<td>이름</td>
				<td>${member.name}</td>
			</tr>
			<tr>
				<td>닉네임</td>
				<td>${member.nname}</td>
			</tr>
			<tr>
				<td>성별</td>
				<td>
					<c:choose>
						<c:when test="${member.gender eq '남성'}">
							남성
						</c:when>
						<c:otherwise>
							여성
						</c:otherwise>
					</c:choose>
				</td>
			</tr>
			<tr>
				<td>회원등록일</td>
				<td>
					<fmt:formatDate value="${member.birthdate}" 
						pattern="yyyy-MM-dd"/>
				</td>
			</tr>
			<tr>
				<td>이메일</td>
				<td>${member.email}</td>
			</tr>
			<tr>
				<td>포인트</td>
				<td>${member.POINT}</td>
			</tr>
			<tr>
				<td colspan=2>
					<c:url value="/index.jsp" var="index"/>
					<input type="button" onclick="location.href='${info}';" value="수정하기" /> | 
					<input type="button" onclick="withdraw('${member.id}');" value="회원탈퇴" />
				</td>
			</tr>
		</table>
		
		<script>
			function withdraw(u_id) {
				if (u_id == 'admin') {
					alert('관리자 계정은 삭제할 수 없습니다.');
					return;
				}
		
				if (confirm('정말로 탈퇴 하시겠습니까?')) {
					location.href = '<c:url value="/member/withdraw.jsp"/>?u_id='+ u_id;
				}
			}
		</script>
		</section>
    
</div>
<jsp:include page="../common/footer.jsp" />
