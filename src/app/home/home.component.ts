import { Component, OnInit } from '@angular/core';
import TypeIt from 'typeit';
import { Rellax } from "rellax";

import 'owl.carousel';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new TypeIt('.typed', {
      strings: ["Softwares.", "Websites.", "Mobile apps."],
      speed: 200,
      loop: true,
      breakLines: false,
      autoStart: false
    });

    new Rellax(".parallax");

    jQuery('.owl-carousel').owlCarousel({
      loop: false,
      autoplay: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });






    this.Menu();
    this.DropdownToggle();
    this.Sticky();
    this.SmooothScroll();
    this.BackgroundText();
    // this.Navbar();
  }

  Menu() {
    var t = $(".menu-toggle"), e = $(".spyre-navbar-overlay"), n = $(".spyre-navbar-nav"), r = $(".search i"), i = $(".navbar-text"); function o() { t.addClass("open"), e.addClass("open"), n.addClass("open"), i.css("z-index", -1) } e.length && t.on({ click: function () { $(this).hasClass("open") ? (n.removeClass("open"), setTimeout(function () { t.removeClass("open"), e.removeClass("open"), i.delay(800).queue(function (t) { $(this).css("z-index", 0), t() }) }, 500), r.length && r.parent().removeClass("open")) : o() } }), r.length && r.on({ click: function () { e.length && o(), setTimeout(function () { r.parent().addClass("open") }, 500) } })
  }

  DropdownToggle() {
    var t = $(".dropdown-toggle"), e = $(".dropdown-menu"); t.length && t.on({ click: function () { var t; t = $(this), e.not(t.next(".dropdown-menu")).slideUp(500), t.next(".dropdown-menu").slideToggle(500) } })
  }

  Sticky() {
    var t = $('[data-toggle="sticky"]'); function e(t) { var e = $(window).width(); void 0 === t.data("sticky-disable-mobile") || t.data("sticky-disable-mobile") ? 992 <= e ? n(t) : t.trigger("sticky_kit:detach") : n(t) } function n(t) { var e = t.data("sticky-offset-top") || 0, n = t.data("sticky-parent") || "section", r = void 0 === t.data("sticky-bottom") || t.data("sticky-bottom"); t.stick_in_parent({ parent: n, offset_top: e, bottoming: r }) } t.length && (t.each(function () { e($(this)) }), $(window).on({ resize: function () { t.each(function () { e($(this)) }) } }))
  }


  SmooothScroll() {
    var t = $("[data-smooth-scroll]"), i = t.data("smooth-scroll-offset") || 0, o = $("html, body"); function e(t) { var e, n, r = t.data("smooth-scroll-hash"); void 0 !== r && !1 === r && event.preventDefault(), n = (e = t).attr("href") ? e.attr("href") : e, o.stop(!0, !0).animate({ scrollTop: $(n).offset().top - i }, 800, function () { }) } t.length && "" !== t.hash && t.on({ click: function (t) { e($(this)) } })
  }
  BackgroundText() { var t = $("[data-background-text], .bg-text"); t.length && t.each(function () { var t, e, n, r, i, o, a, s, l, c; t = $(this), e = t.data("color"), n = t.data("opacity"), r = t.data("font-size"), i = t.data("font-weight"), o = t.data("offset-x"), a = t.data("offset-y"), s = t.data("padding"), l = t.data("margin"), c = t.data("letter-spacing"), t.css({ color: e, opacity: n, "font-size": r, "font-weight": i, left: o, top: a, padding: s, margin: l, "letter-spacing": c }) }) }
  Navbar() { var i = $(".spyre-navbar"), t = i.data("transparent"), o = i.data("text-color"), a = i.css("background-color"), s = i.find(".navbar-text"), l = i.find('.navbar-text a:not(".btn")'), c = $("main").find("section:first-child"); function e() { var t = $(window).scrollTop(), e = $(window).width(), n = (t / (c.find(".bg-container").length ? c.outerHeight() : 800) * 1.5).toString(); if (992 <= e) { if (-1 == a.indexOf("a")) { var r = a.replace(")", ", " + n + ")").replace("rgb", "rgba"); i.attr("style", "background-color: " + r + "!important"), "0.4" < n ? (s.css("color", o), l.css("color", o)) : (s.css("color", ""), l.css("color", "")), "0.97" < n && (r = a.replace(")", ", 0.97)").replace("rgb", "rgba"), i.attr("style", "background-color: " + r + "!important")) } } else i.attr("style", "background-color: " + a + "!important"), s.css("color", o), l.css("color", o) } i.length && void 0 !== t && (e(), $(window).on({ "scroll resize": function () { e() } })) }
}
