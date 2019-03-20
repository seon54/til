# 운영체제 구조



### 응용프로그램, OS, HW(시스템 리소스) 관계

#### 도서관으로 비유

- 운영체제: 도서관
- 응용 프로그램: 시민
- 컴퓨터 하드웨어: 책
  - 시민은 도서관에 원하는 책(자원)을 요청
  - 도서관은 적절한 책을 찾아서 시민에게 빌려줌
  - 기한이 다 되면 도서관은 해당 책 회수



#### 운영체제 역할

- 응용 프로그램이 요청하는 메모리를 허가, 분배

- 응용 프로그램이 요청하는 CPU 시간 제공

- 응용 프로그램 요청하는 IO Devices 사용 허가

- 컴퓨터 하드웨어와 응용 프로그램 관리

  

### 사용자, 응용 프로그램, OS, HW 관계 

![Operating system - Wikipedia](https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FOperating_system_placement.svg%2F1200px-Operating_system_placement.svg.png&f=1)



### 운영체제는 사용자 인터페이스 제공

- 쉘(Shell) 
  - 사용자가 운영체제 기능과 서비스를 조작할 수 있도록 인터페이스를 제공하는 프로그램
  - 터미널 환경(CLI)과 GUI 환경으로 분류



### 운영체제는 응용 프로그램을 위해서도 인터페이스 제공

- API(Application Programming Interface)
  - 함수로 제공
- 보통 Library 형태로 제공
  - 예) C library



#### 시스템 콜(System call)

- 시스템 콜 또는 시스템 호출 인터페이스
- 운영체제가 운영체제 각 기능을 사용할 수 있도록 시스템 콜이라는 명령 또는 함수 제공
- API 내부에는 시스템 콜을 호출하는 형태로 만들어는 경우가 많음ㄴ



### 운영체제 만드는 과정

1. 운영체제 개발 (kernel)
2. 시스템 콜 개발
3. API / Library 
4. Shell 프로그램 
5. 응용 프로그램 개발



### 운영체제와 시스템 콜

- 시스템 콜 정의 예
  - POSIX API, 윈도우 API



> API : 각 언어 별 운영체제 기능 호출 인터페이스 함수
>
> 시스템 콜 : 운영체제 기능을 호출하는 함수

