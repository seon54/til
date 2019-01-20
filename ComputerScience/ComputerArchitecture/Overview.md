# Overview



## Computer

- 전자 회로를 이용하여 데이터를 처리하는 장치
- 방대한 데이터를 저장하고 자동으로 계산
- 입력, 제어, 기억, 연산, 출력 기능을  갖춤



### 기능

- 복잡한 계산(미적분, 통계)
- 초정밀 그래픽 구현
- 네트워크 통신



### 역사 - 고대

- 계산을 하는 도구로서 만들어진 주판
- 기원전 3000년 전 메소포타미아에서 시작하여 17세기까지 주판이 사용됨



### 역사 - 중세

- 파스칼의 계산기 발명(최초의 기계식 계산기)
- 기어로 연결된 바퀴판으로 덧셈, 뺄셈 가능
- 독일의 라이프니츠가 개량하여 사칙연산 가능한 계산기 발명(이진법 적용)



### 역사 - 근현대

- 영국의 찰스 배비지가 차분엔진 발명하여 현대 컴퓨터의 개념을 처음으로 제시
- 차분기관과 해석기관을 설계하여 제어, 연산, 기억, 입출력 가능(범용적 사용)
- 프로그램과 데이터로 구성된 입력에 천공 카드 사용
- 1930년대에 앨런 튜링, 알론조 처치 등이 계산 가능성 및 불가능성에 대해 연구하여 튜링 머신 탄생(정지 문제 - 기계가 판정 불가능한 문제)
- 튜링 머신은 긴 테이프에  부호를 기록하여 이를 프로그램처럼 사용
- 1941년 독일의 콘라드 추제가 Z3 발명(작동, 프로그래밍 가능)
- 1945년 폰 노이만이 stored-program architecture 제안
  - 이전에는 다른 일을 할 때 전선을 재배치 해야했으나 S/W를 교체하는 방식 제안
- 1946년 미국 ENIAC 제작(10진법 사용)



### 역사 - 현대

- 60년대 
  - 초기의 다목적 컴퓨터 IBM 시스템/360 개발
- 70년대 
  - Thompson과 Ritchie가 Unix와 C 개발
  - Intel 8008 프로세서 개발
- 80년대  - 개인용 컴퓨터 출시
  - Intel 프로세서와 MS-DOS 사용하는 IBM PC
  - GUI와 마우스를 사용하는 애플 매킨토시 등장
- 90년대 
  - Linus Torvals가 Linux 개발
  - Microsoft의 Windows 등장
  - 인터넷 포털 등장
- 2000년대 - 비약적인 발전
  - 컴퓨터를 활용하여 인간 DNA 30억 염기서열 연구하는 Genom Project
  - 애플의 iPhone을 필두로 스마트폰 시작 
    - web에 대한 접근성 높아짐
    - 생산되는 데이터의 양이 많아짐
  - 빅데이터, 인공지능



## 컴퓨터 구조 분야의 8가지 아이디어

1. 무어(Moore)의 법칙을 고려한 설계 : 시간 흐름에 따른 컴퓨터 발전 속도에 따른 법칙
2. 설계를 단순화 하는 추상화 : 컴퓨터의 자원이 많아짐에 따라 나타난 방식
3. Common case fast : 자주 발생하는 일은 더 빠르게 최적화
4. 병렬성을 통한 성능 개선 
5. 파이프라이닝을 통한 성능 개선 : 병렬성의 특별한 형태
6. 예측을 통한 성능 개선 : 복구비용이 낮고 성공 확률이 높을 때  효과적
7. 메모리 계층 구조 : 메모리를 처리 속도가 높은 것부터 낮은 순으로 계층 구조를 만들면 데이터의 접근 속도가 빨라짐
8. 여유분을 이용한 신용도 개선 : 시스템의 신뢰도 개선



### 무어의 법칙을 고려한 설계

- 인텔의 창립자 중 한 명인 고든 무어의 예측에서 유래
- 18~24개월마다 칩에 집적되는 소자의 수가 2배가 됨
- 컴퓨터를 설계하는 데에는 수년이 걸리기 때문에 집적되는 소자의 수가 2배 내지 4배 증가



### 설계를 단순화하는 추상화

- 무어의 법칙에 따라 자원의 수가 급격히 증가
- 설계시간이 길어짐으로써 생산성이 낮아짐
- 생산성을 높이기 위해 추상화 개념 사용
- 하위 수준의 상세한 사항을 안 보이게 함으로써 상위 수준 모델 단순화  ex) 고급언어



### Common case fast

- 자주 발생하는 일을 빠르게 처리하여 성능 향상 도모
- Common case에 대한 최적화 및 단순화 -> 효율성 증가
- Common case가 무엇인지 알고 있어야 하며 세심한 실험과 측정 필요



### 병렬성을 통한 성능 개선

- 병렬성 : 큰 문제를 여러 개의 작은 문제로 나누어 해결
- 컴퓨터 역사 초기부터 설계자들은 병렬성을 높여 성능을 끌어올림  ex) Thread(프로세스구성 최소 단위)



### 파이프 라이닝을 통한 성능 개선

- 병렬성의 특별한 형태
- 처음 단계 출력이 다음 단계 입력으로 이어지는 구조
- 시간을 효율적으로 사용 가능



### 예측을 통한 성능 개선

- 수요가 예상되는 부분을 예측하여 미리 설계
- 복구 비용이 낮고 성공 확률이 높을 경우 효과적
- 정확한 예측을 위해 지표 필요. 그러지 않을 경우 복구 비용이 많이 들게 됨



### 메모리 계층 구조

- 메모리 계층 구조를 통한 문제 해결
- 최상위 - 비싸고 제일 빠른 메모리
- 최하위 - 느리고 값 싼 메모리
- 공간적 지역성



### 여유분을 이용한 신용도 개선

- 컴퓨터는 신뢰할 수 있어야 하며 장애 대처를 위한 여유분을 준비해야 함
- 데이터 손실 예방을 위한 백업과 같은 이치