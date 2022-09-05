# MSW + Faker.js

## 설치

```
$ yarn add msw
$ yarn add -D faker-js/faker
```

## 세팅

### 폴더 구조

```bash
├── mocks
│   ├── handlers
│   └── browser
```

mock 폴더: api 요청 모킹 관련 모듈은 단일 디렉토리로 관리되는 것이 좋다. (공식문서)
handlers: 어떤 요청을 모킹 해야하는지 정의하기 위해 핸들러 함수를 사용하며, 요청과 응답을 한다.

### Setup 및 Worker 설정

- Setup: Mock Service Worker는 요청 가로채기를 담당하며, 클라이언트에서 작동한다. 라이브러리에서 이를 지원하는 전용 CLI를 제공한다.

```
$ npx msw init public/ --save (create-react-app 용)

// package.json에 아래 코드 추가한다.
"msw": {
  "workerDirectory": "public"
}
```

- Worker 설정(browser.ts 파일에 설정)

### 실행 결과

- 런타임중에 mocking을 하려면 app 코드에서 작성되어야 한다.
- `.env` 파일에 `REACT_APP_WORKER === MOCK`을 입력하여 모킹이 필요할 때만 이 환경변수로 실행시킨다.

```
if (process.env.REACT_APP_WORKER === 'MOCK') {
  worker.start()
}
```

- Mocking 준비가 되면 app이 처음 실행 된 후 브라우저 콘솔창에 `[MSW] Mocking enabled.` 라는 문구를 확인 할 수 있다.

## 사용 방법

- 코드

## 결과

- 화면

// storybook => component 먼저 구성 => 로직 만들고 => mock 데이터로 받아서

// root의 storybook을 실행시키면, 각 하위에 있는 subsystem의 스토리북을 읽어서 실행시킨다.

// SDD => storybook 주도 개발로 간다.
