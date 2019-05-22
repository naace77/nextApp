# nodejs 관련 네이버 문서

https://d2.naver.com/helloworld/4994500

# next

> Next.js는 Windows, Mac 및 Linux에서 모두 작동합니다. Next.js 응용 프로그램 빌드를 시작하려면 시스템에 Node.js 만 설치하면됩니다.

## 프로젝트 생성

> mkdir hello-next  
> cd hello-next  
> front 와 backend 폴더 생성

## 프로젝트 필요한 모듈 설정

> cd front  
> npm i -g next (next 명령어 쓸수 있다)  
> npm i react react-dom next(리엑트, 넥스트에 필요함)  
> npm i -D nodemon webpack (D 옵션은 개발에만 사용 한다는 의미)  
> npm i -D eslint (코딩 옵션이 다를 때 자동으로 완성시켜주는 기능 / 코딩스타일을 신경쓰지 않게 해줌)
> front/.enlintrc 파일 생성  
> npm i eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks  
> package.json script 설정

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
```

## 라우터 시스템

> next js 에서는 기본 폴더를 pages/index.js로 설정되어 있다.  
> pages/user/create.js 생성  
> 이파일은 주소체계에 연관있다.
>
> > localhost:3000/user/create
>
> index.js

```javacript
    import Link from "next/link";
        const Home = () => {
            return (
                <>
                <Link href="/user/create">
                    <a>create</a>
                </Link>
                <div>HELLO NEXT</div>
                </>
            );
        };
    export default Home;
```

## antd 디자인

> npm i antd

## component

> 리액트에서 폴더구조근 기본적으로 분리되는 것들을 /component 에 둔다.  
> next에서 page에 관련된건 /pages

## \_app.js

> 공통된 컴포넌트 (맨위 메뉴, 푸터 등) 은 next에서 지정한 \_app.js에서 공통 레이아웃을 잡는다.  
> \_app.js 이외에도 제공해주는것도 있다. 공식문서 참고
>
> > ## Head
> >
> > 서버사이드 랜더링에 특화된 next는 /next/head 를 제공해준다.  
> > 이곳에서 title 등 html head 테그 안에 들어가는 부분을 커스터마이징 할 수 있다.

## Login 페이지로 연습하기

> /pages/edocument/index.js 파일 생성
>
> > js 문법 중 import App from "./App" 이런 것을 볼수 있는데  
> > 기본적으로 폴더안의 index.js는  
> > `import Edoc from "./edocument"` 이런식으로 폴더명만으로 import할때 쓰인다.
> > 참고로 예를들어 /edocument/main.js를 생성하여 처음 화면으로 쓰고싶다면  
> > `import Edoc from "./edocument/main"` 이렇게 써야 한다.

## React Hooks

> 이번 프로젝트는 페이스북이 공식언어를 React -> ReactHooks로 선정함에 따라  
> ReactHooks를 사용한다.  
> React 와 Hooks의 가장 큰 차이는 class형식이냐 함수(function)형식이냐 차이와  
> 똑같은 코드를 작성했을 때 Hooks는 엄청난 효율을 준다고 한다.  
> 처음 React를 접하고 Hooks를 보면 헤깔리는 부분이 있을 수 있지만  
> 처음부터 Hooks를 본다면 상관없을 듯 하다.  
> 하지만 Hooks는 나온지 얼마안됐기 때문에 구글에 React sample code를 보고 개별로 번역을 해야하는 경우가 생긴다.
