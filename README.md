# nodejs 관련 네이버 문서

https://d2.naver.com/helloworld/4994500

# React-Hook 관련 문서

https://velog.io/@velopert/react-hooks

# CLIENT

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

## useState

> React에서는 state가 변경될 때 랜더링 된다.  
> 그럼 state는 언제 어떻게 변경 시키는가 ?
>
> > 기존 React 에서는 `this.setState({})` 를 사용 하였지만  
> > Hook 에서는 {useState} from "react" 내의 `useState()` 함수를 사용한다.  
> > 기본 형식으로는 `const [statename, setter] = useState('default value')`  
> > input 등 테그 내 value값이 변할때 주로 사용한다.  
> > `pages/edocument/edocLogin.js` 파일을 참고

## Custom Hook

> 기본적으로 Hook 의 가장큰 장점은 코드의 간결함 이다.  
> 그렇다는 것은 수많은 html 테그 속에서 `useState()` 를 하나하나 설정해준다는 것이 많은 시간이 걸린다.  
> 따라서 우리는 공통적으로 사용되는 코드들을 묶어 custom 시킬 수 있다.
>
> > ```javascript
> > export const useInput = initValue => {
> >   const [value, setter] = useState(initValue);
> >   const onChange = e => {
> >     setter(e.target.value);
> >   };
> >   return { value, onChange };
> > };
> > ```
>
> 이부분도 `edocLogin.js` 내 설명 참고.

## Redux React-Redux

> Redux의 가장 큰 개념은  
> 하나의 js 파일마다 관리되던 state를 중앙통제실과 같은 곳에서 하나로 통제하기 위함이다.  
> 쉽게 설명 하자면
>
> > 페이스 북  
> > 페이스북은 수많은 상태값들이 수시로 변한다. 예를들면 좋아요 같은  
> > 이때 좋아요를 클릭함과 동시에 변해야 할 것들은 상단의 badge 알림, notice, message 등 여러군데에서 사용하게된다  
> > 즉 좋아요 state 가 변함에 따라 다 수의 component들이 변화 해야 한다는 뜻이다.  
> > 이때 마다 각 component들에게 props을 주고 관리한다면 엄청난 코드량과 복잡성이 증가 할 것이다.  
> > 이에 React에서는 중앙통제실을 만들어 이런 현상을 빠르고 간편하게 처리하도록 한다.
>
> ### Redux 주요 개념
>
> State -> 상태  
> Action -> state를 바꾸는 행동 (액션을 통해서만 state를 변화시킬수있다. )  
> Dispatch -> Action을 실행  
> Reducer -> Action의 결과로 state를 어떻게 바꿀지 정의  
> `/reducers` 안에 정의 및 예시 참고

## Redux Saga

> Redux의 문제는 모두 동기적이라는 것이다.  
> 우리는 서버쪽에 data를 전달하고, 서버가 로그인 성공이라는 응답을 주고, 다시 데이터를 받아 로그인을 처리해야 한다.  
> 이 과정을 Redux가 처리를 못하기 때문에 Redux Middleware를 이용해 비동기를 보낼 수 있도록  
> Redux의 기능을 확장 시켜줘야 한다. 여기서 Redux Saga를 사용 하게 된다.
>
> > Function\* generator(){}  
> > 제너레이터는 함수 실행을 중간에 멈출 수 있고 원할 때 재개할수 있어 편하다.  
> > 무한의 개념과 비동기 처리할 때 많이 쓰인다.

# SERVER

## SERVER 세팅

Node는 JavaScript 실행기 / Node 안에 Http 모듈이 서버역할을 대신해줌 / 이모듈은 한계가 있기 때문에 express 사용

> backend 폴도 내 `npm init`  
> npm i cookie-parser  
> npm i express-session  
> npm i dotenv 비밀번호 관리  
> npm i cors 서버 프론트 주소 다를때 (포트 다를때) 보안문제 해결  
> npm i helmet hpp 노드,익스프레스 보안  
> npm i morgan 로그  
> npm i multer 이미지 업로드  
> npm i passport passport-local 회원가입/로그인 쉽게  
> npm i mysql database  
> npm i -D nodemon 서버 재시작

## COOKIE / SESSION

> 매번 서버와 클라이언트간에 누가 로그인을 했는지 물어봐야 한다.  
> 세션 기간 만료에 따른 로그아웃 기능 등 구현할 수있다.

## passport

> `/passport/index.js`, `router/user/index.js` 파일 참고.
