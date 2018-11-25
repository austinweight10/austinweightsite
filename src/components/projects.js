import React, { Component } from 'react'
import ads from '../images/coverImages/ads.jpg'
import END from '../images/coverImages/END.jpg'
import adCalculator from '../images/coverImages/adCalculator.jpg'
import matchBetting from '../images/coverImages/matchBetting.jpg'
// import Headless from '../images/coverImages/Headless.jpg'
import anime from 'animejs'
import '../component.css'
import '../pater.css'

class Projects extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    setTimeout(function() {
      ;(function(window) {
        'use strict'

        function extend(a, b) {
          for (var key in b) {
            if (b.hasOwnProperty(key)) {
              a[key] = b[key]
            }
          }
          return a
        }

        function getMousePos(e) {
          var posx = 0,
            posy = 0
          if (!e) var e = window.event
          if (e.pageX || e.pageY) {
            posx = e.pageX
            posy = e.pageY
          } else if (e.clientX || e.clientY) {
            posx =
              e.clientX +
              document.body.scrollLeft +
              document.documentElement.scrollLeft
            posy =
              e.clientY +
              document.body.scrollTop +
              document.documentElement.scrollTop
          }
          return { x: posx, y: posy }
        }

        function TiltFx(el, options) {
          this.DOM = {}
          this.DOM.el = el
          this.options = extend({}, this.options)
          extend(this.options, options)
          this._init()
        }

        TiltFx.prototype.options = {
          movement: {
            imgWrapper: {
              translation: { x: 0, y: 0, z: 0 },
              rotation: { x: -5, y: 5, z: 0 },
              reverseAnimation: {
                duration: 1200,
                easing: 'easeOutElastic',
                elasticity: 600,
              },
            },
            lines: {
              translation: { x: 10, y: 10, z: [0, 10] },
              reverseAnimation: {
                duration: 1000,
                easing: 'easeOutExpo',
                elasticity: 600,
              },
            },
            caption: {
              translation: { x: 20, y: 20, z: 0 },
              rotation: { x: 0, y: 0, z: 0 },
              reverseAnimation: {
                duration: 1500,
                easing: 'easeOutElastic',
                elasticity: 600,
              },
            },
            shine: {
              translation: { x: 50, y: 50, z: 0 },
              reverseAnimation: {
                duration: 1200,
                easing: 'easeOutElastic',
                elasticity: 600,
              },
            },
          },
        }

        TiltFx.prototype._init = function() {
          this.DOM.animatable = {}
          this.DOM.animatable.imgWrapper = this.DOM.el.querySelector(
            '.tilter__figure'
          )
          this.DOM.animatable.lines = this.DOM.el.querySelector(
            '.tilter__deco--lines'
          )
          this.DOM.animatable.caption = this.DOM.el.querySelector(
            '.tilter__caption'
          )
          this.DOM.animatable.overlay = this.DOM.el.querySelector(
            '.tilter__deco--overlay'
          )
          this.DOM.animatable.shine = this.DOM.el.querySelector(
            '.tilter__deco--shine > div'
          )
          this._initEvents()
        }

        /**
         * Init/Bind events.
         */
        TiltFx.prototype._initEvents = function() {
          var self = this

          this.mouseenterFn = function() {
            for (var key in self.DOM.animatable) {
              anime.remove(self.DOM.animatable[key])
            }
          }

          this.mousemoveFn = function(ev) {
            requestAnimationFrame(function() {
              self._layout(ev)
            })
          }

          this.mouseleaveFn = function(ev) {
            requestAnimationFrame(function() {
              for (var key in self.DOM.animatable) {
                if (self.options.movement[key] == undefined) {
                  continue
                }
                anime({
                  targets: self.DOM.animatable[key],
                  duration:
                    self.options.movement[key].reverseAnimation != undefined
                      ? self.options.movement[key].reverseAnimation.duration ||
                        0
                      : 1,
                  easing:
                    self.options.movement[key].reverseAnimation != undefined
                      ? self.options.movement[key].reverseAnimation.easing ||
                        'linear'
                      : 'linear',
                  elasticity:
                    self.options.movement[key].reverseAnimation != undefined
                      ? self.options.movement[key].reverseAnimation
                          .elasticity || null
                      : null,
                  scaleX: 1,
                  scaleY: 1,
                  scaleZ: 1,
                  translateX: 0,
                  translateY: 0,
                  translateZ: 0,
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                })
              }
            })
          }

          this.DOM.el.addEventListener('mousemove', this.mousemoveFn)
          this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn)
          this.DOM.el.addEventListener('mouseenter', this.mouseenterFn)
        }

        TiltFx.prototype._layout = function(ev) {
          // Mouse position relative to the document.
          var mousepos = getMousePos(ev),
            // Document scrolls.
            docScrolls = {
              left:
                document.body.scrollLeft + document.documentElement.scrollLeft,
              top: document.body.scrollTop + document.documentElement.scrollTop,
            },
            bounds = this.DOM.el.getBoundingClientRect(),
            // Mouse position relative to the main element (this.DOM.el).
            relmousepos = {
              x: mousepos.x - bounds.left - docScrolls.left,
              y: mousepos.y - bounds.top - docScrolls.top,
            }

          // Movement settings for the animatable elements.
          for (var key in this.DOM.animatable) {
            if (
              this.DOM.animatable[key] == undefined ||
              this.options.movement[key] == undefined
            ) {
              continue
            }
            var t =
                this.options.movement[key] != undefined
                  ? this.options.movement[key].translation || {
                      x: 0,
                      y: 0,
                      z: 0,
                    }
                  : { x: 0, y: 0, z: 0 },
              r =
                this.options.movement[key] != undefined
                  ? this.options.movement[key].rotation || { x: 0, y: 0, z: 0 }
                  : { x: 0, y: 0, z: 0 },
              setRange = function(obj) {
                for (var k in obj) {
                  if (obj[k] == undefined) {
                    obj[k] = [0, 0]
                  } else if (typeof obj[k] === 'number') {
                    obj[k] = [-1 * obj[k], obj[k]]
                  }
                }
              }

            setRange(t)
            setRange(r)

            var transforms = {
              translation: {
                x: ((t.x[1] - t.x[0]) / bounds.width) * relmousepos.x + t.x[0],
                y: ((t.y[1] - t.y[0]) / bounds.height) * relmousepos.y + t.y[0],
                z: ((t.z[1] - t.z[0]) / bounds.height) * relmousepos.y + t.z[0],
              },
              rotation: {
                x: ((r.x[1] - r.x[0]) / bounds.height) * relmousepos.y + r.x[0],
                y: ((r.y[1] - r.y[0]) / bounds.width) * relmousepos.x + r.y[0],
                z: ((r.z[1] - r.z[0]) / bounds.width) * relmousepos.x + r.z[0],
              },
            }

            this.DOM.animatable[
              key
            ].style.WebkitTransform = this.DOM.animatable[key].style.transform =
              'translateX(' +
              transforms.translation.x +
              'px) translateY(' +
              transforms.translation.y +
              'px) translateZ(' +
              transforms.translation.z +
              'px) rotateX(' +
              transforms.rotation.x +
              'deg) rotateY(' +
              transforms.rotation.y +
              'deg) rotateZ(' +
              transforms.rotation.z +
              'deg)'
          }
        }

        window.TiltFx = TiltFx
      })(window)
      ;(function() {
        var tiltSettings = [{}, {}]

        function init() {
          var idx = 0
          ;[].slice
            .call(document.querySelectorAll('a.tilter'))
            .forEach(function(el, pos) {
              idx = pos % 2 === 0 ? idx + 1 : idx
              new window.TiltFx(el, tiltSettings[idx - 1])
            })
        }

        init()

        // var pater = document.querySelector('.pater'),
        //   paterSVG = pater.querySelector('.pater__svg'),
        //   pathEl = paterSVG.querySelector('path'),
        //   paths = {
        //     default: pathEl.getAttribute('d'),
        //     active: paterSVG.getAttribute('data-path-hover'),
        //   }

        // pater.addEventListener('mouseenter', function() {
        //   anime.remove(pathEl)
        //   anime({
        //     targets: pathEl,
        //     d: paths.active,
        //     duration: 400,
        //     easing: 'easeOutQuad',
        //   })
        // })

        // pater.addEventListener('mouseleave', function() {
        //   anime.remove(pathEl)
        //   anime({
        //     targets: pathEl,
        //     d: paths.default,
        //     duration: 400,
        //     easing: 'easeOutExpo',
        //   })
        // })
      })()
    }, 3000)
  }
  render() {
    const { click } = this.props
    return (
      <div className="grid grid--effect-rigel AW__projects">
        <a
          className="grid__item grid__item--c1 AW__projects__thumb tilter tilter--2"
          onClick={() => click('creativeCalculator')}
        >
          <figure class="tilter__figure">
            <img
              className="tilter__image"
              src={adCalculator}
              alt="Creative Calculator"
            />
            <div class="tilter__deco tilter__deco--shine">
              <div>
                <div class="glitch glitch1">
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                </div>
              </div>
            </div>
            <div class="tilter__deco tilter__deco--overlay" />
            <figcaption class="tilter__caption">
              <h3 className="grid__item-title content__text">
                Creative Calculator
              </h3>
              <p className="content__text1">
                Site that helps judge creative for perfomance
              </p>
              <span className="content__text2">view more</span>
            </figcaption>
          </figure>
        </a>

        <a
          className="grid__item grid__item--c2 AW__projects__thumb tilter tilter--2"
          onClick={() => click('endClothing')}
        >
          <figure class="tilter__figure">
            <img className="tilter__image" src={END} alt="End Clothing" />
            <div class="tilter__deco tilter__deco--shine">
              <div>
                <div class="glitch glitch2">
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                </div>
              </div>
            </div>
            <div class="tilter__deco tilter__deco--overlay" />
            <figcaption class="tilter__caption">
              <h3 className="grid__item-title content__text3">End Clothing</h3>
              <p className="content__text4">
                Redesign and build of End. site on Magento 2
              </p>
              <span className="content__text5">view more</span>
            </figcaption>
          </figure>
        </a>

        <a
          className="grid__item grid__item--c3 AW__projects__thumb tilter tilter--2"
          onClick={() => click('bannerAds')}
        >
          <figure class="tilter__figure">
            <img className="tilter__image" src={ads} alt="Banner Ads" />
            <div class="tilter__deco tilter__deco--shine">
              <div>
                <div class="glitch glitch3">
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                </div>
              </div>
            </div>
            <div class="tilter__deco tilter__deco--overlay" />
            <figcaption class="tilter__caption">
              <h3 className="grid__item-title content__text6">Banner Ads</h3>
              <p className="content__text7">A selection of banner ads</p>
              <span className="content__text8">view more</span>
            </figcaption>
          </figure>
        </a>

        <a
          className="grid__item grid__item--c4 AW__projects__thumb tilter tilter--2"
          onClick={() => click('matchBetting')}
        >
          <figure class="tilter__figure">
            <img
              className="tilter__image"
              src={matchBetting}
              alt="Match Betting"
            />
            <div class="tilter__deco tilter__deco--shine">
              <div>
                <div class="glitch glitch4">
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                  <div class="glitch__img glitch__img_trans" />
                </div>
              </div>
            </div>
            <div class="tilter__deco tilter__deco--overlay" />
            <figcaption class="tilter__caption">
              <h3 className="grid__item-title content__text9">Match Betting</h3>
              <p className="content__text10">
                A small react app that allows people to match bet
              </p>
              <span className="content__text11">view more</span>
            </figcaption>
          </figure>
        </a>

        {/* <a className="grid__item grid__item--c5 AW__projects__thumb" onClick={x => click("headless")}>
            <a href="#" class="tilter tilter--2">
                <figure class="tilter__figure">
                    <img className="tilter__image" src={Headless} alt="Headless END."  />
                    <div class="tilter__deco tilter__deco--shine"><div>
					<div class="glitch glitch4">
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
					</div></div></div>
                    <div class="tilter__deco tilter__deco--overlay"></div>
                    <figcaption class="tilter__caption">
                        <h3 className="grid__item-title content__text9">Headless END.</h3>
                        <p className="content__text10">Spliting the Frontend from Magento</p>
                        <span className="content__text11">view more</span>
                    </figcaption>
                </figure>
            </a>
        </a> */}

        {/* recipie */}
        {/* <a className="grid__item grid__item--c5 AW__projects__thumb" onClick={x => click("headless")}>
            <a href="#" class="tilter tilter--2">
                <figure class="tilter__figure">
                    <img className="tilter__image" src={Headless} alt="Headless END."  />
                    <div class="tilter__deco tilter__deco--shine"><div>
					<div class="glitch glitch4">
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
					</div></div></div>
                    <div class="tilter__deco tilter__deco--overlay"></div>
                    <figcaption class="tilter__caption">
                        <h3 className="grid__item-title content__text9">Headless END.</h3>
                        <p className="content__text10">Spliting the Frontend from Magento</p>
                        <span className="content__text11">view more</span>
                    </figcaption>
                </figure>
            </a>
		</a> */}

        {/* Yawp */}
        {/* <a className="grid__item grid__item--c5 AW__projects__thumb" onClick={x => click("headless")}>
            <a href="#" class="tilter tilter--2">
                <figure class="tilter__figure">
                    <img className="tilter__image" src={Headless} alt="Headless END."  />
                    <div class="tilter__deco tilter__deco--shine"><div>
					<div class="glitch glitch4">
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
						<div class="glitch__img glitch__img_trans"></div>
					</div></div></div>
                    <div class="tilter__deco tilter__deco--overlay"></div>
                    <figcaption class="tilter__caption">
                        <h3 className="grid__item-title content__text9">Headless END.</h3>
                        <p className="content__text10">Spliting the Frontend from Magento</p>
                        <span className="content__text11">view more</span>
                    </figcaption>
                </figure>
            </a>
        </a> */}
      </div>
    )
  }
}

export default Projects
