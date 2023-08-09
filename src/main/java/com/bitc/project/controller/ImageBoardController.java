package com.bitc.project.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bitc.project.service.ImageBoardService;
import com.bitc.project.vo.ImageBoardVO;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/imageBoard")
public class ImageBoardController {

	private final ImageBoardService is;
	
	@GetMapping("imgBoard_list")
	public void imgBoardList(Model model) throws Exception {
		List<ImageBoardVO> list = is.imageBoardList();
		System.out.println(list);
		model.addAttribute("imgBoardList",list);
	}
	/*
	@GetMapping("imgBoard_form")
	public void imgBoardForm() {}
	
	@PostMapping("create")
	public String create(ImageBoardVO vo,Model model) throws UnsupportedEncodingException {
		System.out.println(vo);
		List<ImageBoardVO> list = new ArrayList<>();
		list.add(vo);
		model.addAttribute("imgBoardList",list);
		return "imageBoard/imgBoard_list";
	}
	*/
}
