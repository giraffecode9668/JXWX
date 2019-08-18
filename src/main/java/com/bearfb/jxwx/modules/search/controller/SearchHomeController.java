package com.bearfb.jxwx.modules.search.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <p>
 *  搜索模块路由选择
 * </p>
 *
 * @author linzimin
 * @date 2019/8/18 16:57
 */
@Controller
@RequestMapping("/search")
public class SearchHomeController {

    /**
     * 搜索页·首页
     * @return 返回"search/home"看历史页面
     */
    @RequestMapping(value = {"","/","/home","home.html"})
    public String search(){
        return "modules/search/home";
    }
}
