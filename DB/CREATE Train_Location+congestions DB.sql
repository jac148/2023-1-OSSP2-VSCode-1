CREATE DATABASE train_info;
USE train_info;
CREATE TABLE `지하철 역 정보` (
	`statnId`	VARCHAR(20)	NOT NULL PRIMARY KEY	COMMENT '역 ID',
	`subwayList`	VARCHAR(4)	NOT NULL	COMMENT '연계호선ID 리스트',
	`statnList`	VARCHAR(10)	NOT NULL	COMMENT '연계치하철역ID 리스트',
	`tmsitCo`	VARCHAR(2)	NOT NULL	COMMENT '환승 노선 수',
	`statnNm`	VARCHAR(10)	NOT NULL	COMMENT '지하철 역 명'
);

CREATE TABLE `지하철 위치` (
	`btrainNo`	VARCHAR(20) NOT NULL PRIMARY KEY	COMMENT '열차 번호',
	`trainLineNm`	VARCHAR(40)	NOT NULL	COMMENT '도착지 방면 이름',
	`statnFid`	VARCHAR(20)	NOT NULL	COMMENT '이전 지하철 역 ID',
	`statnTid`	VARCHAR(20)	NOT NULL	COMMENT '다음 지하철 역 ID',
	`arvlCd`	VARCHAR(2)	NOT NULL	COMMENT '도착 코드',
    FOREIGN KEY (`statnFid`) REFERENCES `지하철 역 정보` (`statnId`),
    FOREIGN KEY (`statnTid`) REFERENCES `지하철 역 정보` (`statnId`)
);

CREATE TABLE `2,3호선 실시간 혼잡도` (
	`trainY`	VARCHAR(20)	NOT NULL	COMMENT '열차번호 btrainNo에서 가져와야 함',
	`subwayLine`	VARCHAR(20)	NOT NULL	COMMENT '2,3호선 선택',
	`congestionCar`	VARCHAR(20)	NULL	COMMENT '열차의 칸이 10개인 경우: 34|31|31|38|41|38|30|34|38|38'
);

ALTER TABLE `2,3호선 실시간 혼잡도` ADD CONSTRAINT `PK_2,3호선 실시간 혼잡도` PRIMARY KEY (
	`trainY`,
	`subwayLine`
);

CREATE TABLE `지하철 정보` (
	`subwayID`	VARCHAR(4)	NOT NULL	COMMENT '호선이름',
	`btrainSttus`	VARCHAR(20)	NOT NULL	COMMENT '열차 종류',
	`updnLine`	VARCHAR(1)	NOT NULL	COMMENT '상/하행',
	`bstatnNm`	VARCHAR(10)	NOT NULL	COMMENT '종착역 이름',
	`btrainNo`	VARCHAR(20)	NOT NULL	COMMENT '열차 번호',
	`bstatnId`	VARCHAR(20)	NOT NULL	COMMENT '종착역 ID',
	PRIMARY KEY (`subwayID`),
    FOREIGN KEY (`bstatnId`) REFERENCES `지하철 역 정보` (`statnId`),
    FOREIGN KEY (`btrainNo`) REFERENCES `2,3호선 실시간 혼잡도` (`trainY`)
);

CREATE TABLE `지하철 도착 정보` (
	`arvlCd`	VARCHAR(2)	NOT NULL	COMMENT '도착 코드',
	`barvlDt`	TIME	NOT NULL	COMMENT '열차 도착 예정 시간',
	`recptnDt`	TIME	NOT NULL	COMMENT '도착 정보 생성 시간',
	`arvlMsg2`	VARCHAR(4)	NULL	COMMENT '첫 번째 도착 메세지',
	`arvlMsg3`	VARCHAR(30)	NULL	COMMENT '두 번째 도착 메세지',
	PRIMARY KEY (`arvlCd`)
);

CREATE TABLE `통계적 열차 혼잡도 시간` (
	`stationCode`	VARCHAR(255)	NOT NULL	COMMENT '특정 역으로 진입하는 열차의 칸 별 혼잡도를 제공',
	`statStartDate`	VARCHAR(20)	NULL	COMMENT '통계 시작 일자',
	`statEndDate`	VARCHAR(20)	NULL	COMMENT '통계 종료 일자',
	`dow`	VARCHAR(20)	NOT NULL	COMMENT '검색 기준 요일',
	`hh`	VARCHAR(20)	NOT NULL	COMMENT '검색 기준 시간',
	`mm`	VARCHAR(20)	NOT NULL	COMMENT '10분 단위 시간',
	PRIMARY KEY (`stationCode`)
);

CREATE TABLE `통계적 열차 혼잡도` (
	`dow`	VARCHAR(20)	NOT NULL	COMMENT '검색 기준 요일',
	`hh`	VARCHAR(20)	NOT NULL	COMMENT '검색 기준 시간',
	`mm`	VARCHAR(20)	NOT NULL	COMMENT '10분 단위 시간',
	`congestionCar`	TINYINT	NOT NULL	COMMENT '열차 혼잡도'
);

CREATE TABLE `역 리스트` (
	`subwayLine`	VARCHAR(20)	NULL	COMMENT '호선',
	`stationName`	VARCHAR(20)	NULL	COMMENT '역 이름',
	`stationCode`	VARCHAR(255)	NOT NULL	COMMENT '특정 역으로 진입하는 열차의 칸 별 혼잡도를 제공'
);

ALTER TABLE `통계적 열차 혼잡도` ADD CONSTRAINT `PK_통계적 열차 혼잡도` PRIMARY KEY (
	`dow`,
	`hh`,
	`mm`
);

ALTER TABLE `역 리스트` ADD CONSTRAINT `PK_역 리스트` PRIMARY KEY (
	`subwayLine`,
	`stationName`
);
