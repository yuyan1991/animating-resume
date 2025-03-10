<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 20,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
 * Inspired by http://strml.net/
 *
 * Hi, I'm Ziqi.
 *
 * I am now presenting my resume to you.
 */

/* First, let's add the transition effect. */
{
  transition: all .3s;
}
/* White background is so boring, thus make some different. */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
/* Text is too close border. */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 90vw;
  margin: 2.5vh 5vw;
  height: 90vh;
}
/* Need to adjust height. */
.styleEditor {
  height: 45vh;
}
/* Highlight the code */
.token.selector{
  color: rgb(133,153,0);
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}

/* Add some 3D effect */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  transform: rotateX(-10deg) translateZ(-50px) ;
}

/* Next, create an editor. */
.resumeEditor{
  position: fixed;
  top: 50%; left: 0;
  padding: .5em;  margin: 2.5vh;
  width: 95vw; height: 45vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* Okay, it's time to write my resume. */


`,
          `
/* Seems something strange in my resume.
 * Yup, my resume is in Markdown format. I need to make my resume more friendly to HR.
 * Here use the open soucre tool to convert my resume to HTML.
 */
`
          ,
          `
/* add some styles for HTML */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
        currentMarkdown: '',
        fullMarkdown: `Ziqi Huang
----

Software Developer

Email: [yuyan1991@gmail.com(preferred)](mailto:yuyan1991@gmail.com)
Telephone: +852-66041524

Technology Stack
----

* Git
* Java
* Spring
* RDBMS
* RESTful API
* MongoDB
* Redis
* Docker
* JavaScript
* HTML
* CSS
* React
* Python
* C++

Working Experience
----

[China Construction Bank Asia](https://www.asia.ccb.com/) (Protiviti) (December 2019 - Present)

*Senior Analyst Programmer*
1. Collaborate with the CCBA user to confirm the project requirement
2. Develop and maintain P2-Gateway, STM and P2-OTP Project
3. Assist CCBA users to perform UAT and PROD for ECPWEB project and STM project
4. Collaborate with DBA team, TRM team, UNIX team and Change Control Team to build and deploy system for UAT and PROD
5. Develop IPO Revamp Project

*Projects*

* ECPWEB
* P2-OTP
* STM
* P2-Gateway
* IPO Revamp

[Infinite Financial Solutions Ltd](https://www.ifshk.com) (August 2015 - November 2019)

*Analyst Programmer*

1. Develop and maintain FinTech system for [Shanghai Commercial Bank](https://www.shacombank.com.hk/)
2. Code, environment setup and deploy for FinTech system.
3. Collaborate with developers, designers, UX designers and project managers in an agile team building responsive, cross-browser compatible and scalable web apps.


*Projects*
* [Faster Payment System](https://fps.hkicl.com.hk/eng/fps/index.php)(i.e FPS, 轉數快)
* Wealth Management System
* Insurance System

Education
----

[The Chinese University of Hong Kong](http://www.cuhk.edu.hk) 2014.09 - 2015.07 (Hong Kong)

* Master Degree in Computer Science & Engineering

[Sun Yat-sen University](http://www.sysu.edu.cn) 2010.09-2014.06 (Guangzhou, China)

* Bachelor Degree in Computer Science

Link
----

* [GitHub](https://github.com/yuyan1991)

`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          this.$nextTick(() => {
            this.$refs.resumeEditor.goTop()
          })
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh; position: relative;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }

</style>
