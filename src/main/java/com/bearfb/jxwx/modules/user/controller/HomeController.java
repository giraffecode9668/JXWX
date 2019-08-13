package com.bearfb.jxwx.modules.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <p>
 *
 * </p>
 *
 * @author linzimin
 * @date 2019/8/13 16:26
 */
@Controller
public class HomeController {

    @RequestMapping("login")
    public String home(){
        return "modules/user/login";
    }
}
