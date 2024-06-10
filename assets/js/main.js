!(function (e) {
  "use strict";
  if (
    (e(window).on("load", function () {
      e(".preloader").fadeOut();
    }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    (e.fn.thmobilemenu = function (t) {
      var a = e.extend(
        {
          menuToggleBtn: ".th-menu-toggle",
          bodyToggleClass: "th-body-visible",
          subMenuClass: "th-submenu",
          subMenuParent: "th-item-has-children",
          subMenuParentToggle: "th-active",
          meanExpandClass: "th-mean-expand",
          appendElement: '<span class="th-mean-expand"></span>',
          subMenuToggleClass: "th-open",
          toggleSpeed: 400,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        function s() {
          t.toggleClass(a.bodyToggleClass);
          var s = "." + a.subMenuClass;
          e(s).each(function () {
            e(this).hasClass(a.subMenuToggleClass) &&
              (e(this).removeClass(a.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(a.subMenuParentToggle));
          });
        }
        t.find("li").each(function () {
          var t = e(this).find("ul");
          t.addClass(a.subMenuClass),
            t.css("display", "none"),
            t.parent().addClass(a.subMenuParent),
            t.prev("a").append(a.appendElement),
            t.next("a").append(a.appendElement);
        });
        var n = "." + a.meanExpandClass;
        e(n).each(function () {
          e(this).on("click", function (t) {
            var s;
            t.preventDefault(),
              (s = e(this).parent()),
              e(s).next("ul").length > 0
                ? (e(s).parent().toggleClass(a.subMenuParentToggle),
                  e(s).next("ul").slideToggle(a.toggleSpeed),
                  e(s).next("ul").toggleClass(a.subMenuToggleClass))
                : e(s).prev("ul").length > 0 &&
                  (e(s).parent().toggleClass(a.subMenuParentToggle),
                  e(s).prev("ul").slideToggle(a.toggleSpeed),
                  e(s).prev("ul").toggleClass(a.subMenuToggleClass));
          });
        }),
          e(a.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              s();
            });
          }),
          t.on("click", function (e) {
            e.stopPropagation(), s();
          }),
          t.find("div").on("click", function (e) {
            e.stopPropagation();
          });
      });
    }),
    e(".th-menu-wrapper").thmobilemenu(),
    e(window).scroll(function () {
      e(this).scrollTop() > 500
        ? e(".sticky-wrapper").addClass("sticky")
        : e(".sticky-wrapper").removeClass("sticky");
    }),
    e(".scroll-top"))
  ) {
    var t = document.querySelector(".scroll-top"),
      a = document.querySelector(".scroll-top path"),
      s = a.getTotalLength();
    (a.style.transition = a.style.WebkitTransition = "none"),
      (a.style.strokeDasharray = s + " " + s),
      (a.style.strokeDashoffset = s),
      a.getBoundingClientRect(),
      (a.style.transition = a.style.WebkitTransition =
        "stroke-dashoffset 10ms linear");
    var n = function () {
      var t = e(window).scrollTop(),
        n = e(document).height() - e(window).height(),
        i = s - (t * s) / n;
      a.style.strokeDashoffset = i;
    };
    n(), e(window).scroll(n);
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 50
        ? jQuery(t).addClass("show")
        : jQuery(t).removeClass("show");
    }),
      jQuery(t).on("click", function (e) {
        return (
          e.preventDefault(),
          jQuery("html, body").animate({ scrollTop: 0 }, 750),
          !1
        );
      });
  }
  e("[data-bg-src]").length > 0 &&
    e("[data-bg-src]").each(function () {
      var t = e(this).attr("data-bg-src");
      e(this).css("background-image", "url(" + t + ")"),
        e(this).removeAttr("data-bg-src").addClass("background-image");
    }),
    e("[data-bg-color]").length > 0 &&
      e("[data-bg-color]").each(function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color");
      }),
    e("[data-border]").each(function () {
      var t = e(this).data("border");
      e(this).css("--th-border-color", t);
    }),
    e("[data-mask-src]").length > 0 &&
      e("[data-mask-src]").each(function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
          "mask-image": "url(" + t + ")",
          "-webkit-mask-image": "url(" + t + ")",
        }),
          e(this).addClass("bg-mask"),
          e(this).removeAttr("data-mask-src");
      }),
    e(".th-slider").each(function () {
      var t = e(this),
        a = e(this).data("slider-options"),
        s = t.find(".slider-prev"),
        n = t.find(".slider-next"),
        i = t.find(".slider-pagination"),
        o = a.autoplay,
        r = {
          slidesPerView: 1,
          spaceBetween: a.spaceBetween ? a.spaceBetween : 24,
          loop: 0 != a.loop,
          speed: a.speed ? a.speed : 1e3,
          autoplay: o || { delay: 6e3, disableOnInteraction: !1 },
          navigation: { nextEl: n.get(0), prevEl: s.get(0) },
          pagination: {
            el: i.get(0),
            clickable: !0,
            renderBullet: function (e, t) {
              return (
                '<span class="' +
                t +
                '" aria-label="Go to Slide ' +
                (e + 1) +
                '"></span>'
              );
            },
          },
        },
        l = JSON.parse(t.attr("data-slider-options"));
      l = e.extend({}, r, l);
      new Swiper(t.get(0), l);
      e(".slider-area").length > 0 &&
        e(".slider-area").closest(".container").parent().addClass("arrow-wrap");
    }),
    e("[data-ani]").each(function () {
      var t = e(this).data("ani");
      e(this).addClass(t);
    }),
    e("[data-ani-delay]").each(function () {
      var t = e(this).data("ani-delay");
      e(this).css("animation-delay", t);
    }),
    e("[data-slider-prev], [data-slider-next]").on("click", function () {
      var t = e(this).data("slider-prev") || e(this).data("slider-next"),
        a = e(t);
      if (a.length) {
        var s = a[0].swiper;
        s && (e(this).data("slider-prev") ? s.slidePrev() : s.slideNext());
      }
    }),
    (e.fn.activateSliderThumbs = function (t) {
      var a = e.extend({ sliderTab: !1, tabButton: ".tab-btn" }, t);
      return this.each(function () {
        var t = e(this),
          s = t.find(a.tabButton),
          n = e('<span class="indicator"></span>').appendTo(t),
          i = t.data("slider-tab"),
          o = e(i)[0].swiper;
        if (
          (s.on("click", function (t) {
            t.preventDefault();
            var s = e(this);
            if (
              (s.addClass("active").siblings().removeClass("active"),
              c(s),
              a.sliderTab)
            ) {
              var n = s.index();
              o.slideTo(n);
            }
          }),
          a.sliderTab)
        ) {
          o.on("slideChange", function () {
            var e = o.realIndex,
              t = s.eq(e);
            t.addClass("active").siblings().removeClass("active"), c(t);
          });
          var r = o.activeIndex,
            l = s.eq(r);
          l.addClass("active").siblings().removeClass("active"), c(l);
        }
        function c(e) {
          var t = e.position(),
            a = parseInt(e.css("margin-top")) || 0,
            s = parseInt(e.css("margin-left")) || 0;
          n.css("--height-set", e.outerHeight() + "px"),
            n.css("--width-set", e.outerWidth() + "px"),
            n.css("--pos-y", t.top + a + "px"),
            n.css("--pos-x", t.left + s + "px");
        }
      });
    }),
    e(".testi-thumb").length &&
      e(".testi-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      });
  var i,
    o,
    r,
    l = ".ajax-contact",
    c = '[name="email"]',
    d = e(".form-messages");
  function u() {
    var t = e(l).serialize();
    (function () {
      var t,
        a = !0;
      function s(s) {
        s = s.split(",");
        for (var n = 0; n < s.length; n++)
          (t = l + " " + s[n]),
            e(t).val()
              ? (e(t).removeClass("is-invalid"), (a = !0))
              : (e(t).addClass("is-invalid"), (a = !1));
      }
      s(
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'
      ),
        e(c).val() &&
        e(c)
          .val()
          .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          ? (e(c).removeClass("is-invalid"), (a = !0))
          : (e(c).addClass("is-invalid"), (a = !1));
      return a;
    })() &&
      jQuery
        .ajax({ url: e(l).attr("action"), data: t, type: "POST" })
        .done(function (t) {
          d.removeClass("error"),
            d.addClass("success"),
            d.text(t),
            e(l + ' input:not([type="submit"]),' + l + " textarea").val("");
        })
        .fail(function (e) {
          d.removeClass("success"),
            d.addClass("error"),
            "" !== e.responseText
              ? d.html(e.responseText)
              : d.html(
                  "Oops! An error occured and your message could not be sent."
                );
        });
  }
  if (
    (e(l).on("submit", function (e) {
      e.preventDefault(), u();
    }),
    (i = ".popup-search-box"),
    (o = ".searchClose"),
    (r = "show"),
    e(".searchBoxToggler").on("click", function (t) {
      t.preventDefault(), e(i).addClass(r);
    }),
    e(i).on("click", function (t) {
      t.stopPropagation(), e(i).removeClass(r);
    }),
    e(i)
      .find("form")
      .on("click", function (t) {
        t.stopPropagation(), e(i).addClass(r);
      }),
    e(o).on("click", function (t) {
      t.preventDefault(), t.stopPropagation(), e(i).removeClass(r);
    }),
    (function (t, a, s, n) {
      e(a).on("click", function (a) {
        a.preventDefault(), e(t).addClass(n);
      }),
        e(t).on("click", function (a) {
          a.stopPropagation(), e(t).removeClass(n);
        }),
        e(t + " > div").on("click", function (a) {
          a.stopPropagation(), e(t).addClass(n);
        }),
        e(s).on("click", function (a) {
          a.preventDefault(), a.stopPropagation(), e(t).removeClass(n);
        });
    })(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"),
    e(".popup-image").magnificPopup({
      type: "image",
      mainClass: "mfp-zoom-in",
      removalDelay: 260,
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({
      type: "iframe",
      mainClass: "mfp-zoom-in",
      removalDelay: 260,
    }),
    e(".popup-content").magnificPopup({ type: "inline", midClick: !0 }),
    e(".th-screen").length &&
      e(window).on("scroll", function () {
        !(function (t, a = 0) {
          var s = e(window).scrollTop(),
            n = s + e(window).height(),
            i = e(t).offset().top;
          return i + e(t).height() - parseInt(a) <= n && i >= s;
        })(".th-screen", 200)
          ? e(".th-screen").removeClass("th-visible")
          : e(".th-screen").addClass("th-visible");
      }),
    e(".th-anim").length)
  ) {
    gsap.registerPlugin(ScrollTrigger),
      document.querySelectorAll(".th-anim").forEach((e) => {
        let t = e.querySelector("img"),
          a = gsap.timeline({
            scrollTrigger: { trigger: e, toggleActions: "play none none none" },
          });
        a.set(e, { autoAlpha: 1 }),
          a.from(e, 1.5, { xPercent: -100, ease: Power2.out }),
          a.from(t, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out,
          });
      });
  }
  function p(e) {
    return parseInt(e, 10);
  }
  e.fn.sectionPosition = function (t, a) {
    e(this).each(function () {
      var s,
        n,
        i,
        o,
        r,
        l = e(this);
      (s = Math.floor(l.height() / 2)),
        (n = l.attr(t)),
        (i = l.attr(a)),
        (o = p(e(i).css("padding-top"))),
        (r = p(e(i).css("padding-bottom"))),
        "top-half" === n
          ? (e(i).css("padding-bottom", r + s + "px"),
            l.css("margin-top", "-" + s + "px"))
          : "bottom-half" === n &&
            (e(i).css("padding-top", o + s + "px"),
            l.css("margin-bottom", "-" + s + "px"));
    });
  };
  function h() {
    e(".feature-circle .progressbar").each(function () {
      var t = e(this).attr("data-path-color"),
        a = e(this).offset().top,
        s = e(window).scrollTop(),
        n = e(this).find(".circle").attr("data-percent"),
        i = (parseInt(n, 10), parseInt(100, 10), e(this).data("animate"));
      a < s + e(window).height() - 30 &&
        !i &&
        (e(this).data("animate", !0),
        e(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 2,
            value: n / 100,
            size: 100,
            thickness: 6,
            emptyFill: "transparent",
            lineCap: "round",
            fill: { color: t },
          })
          .on("circle-animation-progress", function (t, a, s) {
            e(this)
              .find(".circle-num")
              .text((100 * s).toFixed(0) + "%");
          })
          .stop());
    }),
      e(".skill-circle .progressbar").each(function () {
        var t = e(this).offset().top,
          a = e(window).scrollTop(),
          s = e(this).find(".circle").attr("data-percent"),
          n = (parseInt(s, 10), parseInt(100, 10), e(this).data("animate"));
        t < a + e(window).height() - 30 &&
          !n &&
          (e(this).data("animate", !0),
          e(this)
            .find(".circle")
            .circleProgress({
              startAngle: -Math.PI / 2,
              value: s / 100,
              size: 100,
              thickness: 8,
              emptyFill: "#E0E0E0",
              lineCap: "round",
              fill: { gradient: ["#F11F22", "#F2891D"] },
            })
            .on("circle-animation-progress", function (t, a, s) {
              e(this)
                .find(".circle-num")
                .text((100 * s).toFixed(0) + "%");
            })
            .stop());
      });
  }
  e("[data-sec-pos]").length &&
    e("[data-sec-pos]").imagesLoaded(function () {
      e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for");
    }),
    e(".filter-active-cat1").imagesLoaded(function () {
      if (e(".filter-active-cat1").length > 0) {
        var t = e(".filter-active-cat1").isotope({
          itemSelector: ".filter-item",
          filter: ".cat1",
          masonry: { columnWidth: 1 },
        });
        e(".filter-menu-active").on("click", "button", function () {
          var a = e(this).attr("data-filter");
          t.isotope({ filter: a });
        }),
          e(".filter-menu-active").on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".masonary-active").imagesLoaded(function () {
      e(".masonary-active").length > 0 &&
        e(".masonary-active").isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: { columnWidth: 1 },
        });
    }),
    e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(
      function () {
        var t = ".masonary-active, .woocommerce-Reviews .comment-list";
        e(t).length > 0 &&
          e(t).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: { columnWidth: 1 },
          }),
          e('[data-bs-toggle="tab"]').on("shown.bs.tab", function (a) {
            e(t).isotope({ filter: "*" });
          });
      }
    ),
    e(".counter-number").counterUp({ delay: 10, time: 1e3 }),
    (e.fn.shapeMockup = function () {
      e(this).each(function () {
        var t = e(this),
          a = t.data("top"),
          s = t.data("right"),
          n = t.data("bottom"),
          i = t.data("left");
        t.css({ top: a, right: s, bottom: n, left: i })
          .removeAttr("data-top")
          .removeAttr("data-right")
          .removeAttr("data-bottom")
          .removeAttr("data-left")
          .parent()
          .addClass("shape-mockup-wrap");
      });
    }),
    e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
    e(".progress-bar").waypoint(
      function () {
        e(".progress-bar").css({
          animation: "animate-positive 1.8s",
          opacity: "1",
        });
      },
      { offset: "75%" }
    ),
    e(".price_slider").slider({
      range: !0,
      min: 10,
      max: 100,
      values: [10, 75],
      slide: function (t, a) {
        e(".from").text("$" + a.values[0]), e(".to").text("$" + a.values[1]);
      },
    }),
    e(".from").text("$" + e(".price_slider").slider("values", 0)),
    e(".to").text("$" + e(".price_slider").slider("values", 1)),
    e(".tilt-active").tilt({ maxTilt: 7, perspective: 1e3 }),
    h(),
    e(window).scroll(h),
    e("#ship-to-different-address-checkbox").on("change", function () {
      e(this).is(":checked")
        ? e("#ship-to-different-address").next(".shipping_address").slideDown()
        : e("#ship-to-different-address").next(".shipping_address").slideUp();
    }),
    e(".woocommerce-form-login-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-login").slideToggle();
    }),
    e(".woocommerce-form-coupon-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
    }),
    e(".shipping-calculator-button").on("click", function (t) {
      t.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }),
    e('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show(),
    e('.wc_payment_methods input[type="radio"]').each(function () {
      e(this).on("change", function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      });
    }),
    e(".rating-select .stars a").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      });
    }),
    e(".quantity-plus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          s = parseInt(a.val(), 10);
        isNaN(s) || a.val(s + 1);
      });
    }),
    e(".quantity-minus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          s = parseInt(a.val(), 10);
        !isNaN(s) && s > 1 && a.val(s - 1);
      });
    });
  var m = e(".cursor"),
    g = e(".cursor2"),
    f = 0,
    v = 0,
    b = 0,
    y = 0;
  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      (f += (b - f) / 9),
        (v += (y - v) / 9),
        TweenMax.set(g, { css: { left: f - 12, top: v - 12 } }),
        TweenMax.set(m, { css: { left: b, top: y } });
    },
  }),
    e(document).on("mousemove", function (e) {
      (b = e.clientX), (y = e.clientY);
    }),
    e(".btn").on("mouseenter", function () {
      m.addClass("active"), g.addClass("active");
    }),
    e(".btn").on("mouseleave", function () {
      m.removeClass("active"), g.removeClass("active");
    }),
    window.gsap.registerPlugin(window.TweenMax),
    e(".color-switch-btns button").each(function () {
      const t = e(this),
        a = t.data("color");
      t.css("--theme-color", a),
        t.on("click", function () {
          const t = e(this).data("color");
          e("body").css("--theme-color", t);
        });
    }),
    e(document).on("click", ".switchIcon", function () {
      e(".color-scheme-wrap").toggleClass("active");
    });
  var w = document.getElementById("filt-monthly"),
    C = document.getElementById("filt-yearly"),
    k = document.getElementById("switcher"),
    x = document.getElementById("monthly"),
    T = document.getElementById("yearly");
  e(".pricing-tabs").length &&
    (w.addEventListener("click", function () {
      (k.checked = !1),
        w.classList.add("toggler--is-active"),
        C.classList.remove("toggler--is-active"),
        x.classList.remove("hide"),
        T.classList.add("hide");
    }),
    C.addEventListener("click", function () {
      (k.checked = !0),
        C.classList.add("toggler--is-active"),
        w.classList.remove("toggler--is-active"),
        x.classList.add("hide"),
        T.classList.remove("hide");
    }),
    k.addEventListener("click", function () {
      C.classList.toggle("toggler--is-active"),
        w.classList.toggle("toggler--is-active"),
        x.classList.toggle("hide"),
        T.classList.toggle("hide");
    })),
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      !1
    )
    
})(jQuery);
