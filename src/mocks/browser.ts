// 요청 핸들러를 사용하여 작업자 인스턴스를 만든다.
import { setupWorker } from 'msw'
import { handlers } from './handlers'

// 주어진 요청 핸들러로 서비스 워커를 구성한다.
export const worker = setupWorker(...handlers)
