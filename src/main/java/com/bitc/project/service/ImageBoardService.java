package com.bitc.project.service;

import java.util.List;

import com.bitc.project.vo.ImageBoardVO;

public interface ImageBoardService {
	/**
	 * 전체 이미지 게시글 가져오기
	 */
	public List<ImageBoardVO> imageBoardList() throws Exception;
	
	/**
	 * 게시글 작성
	 */
	public int createImageBoard(ImageBoardVO vo) throws Exception;
}