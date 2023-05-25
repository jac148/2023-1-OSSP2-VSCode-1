CREATE TABLE `지하철 위치` (
	`btrainNo`	VARCHAR(20)	NOT NULL,
	`trainLineNm`	VARCHAR(40)	NULL,
	`statnFid`	VARCHAR(20)	NOT NULL,
	`statnTid`	VARCHAR(20)	NOT NULL,
	`arvlCd`	VARCHAR(2)	NOT NULL
);

CREATE TABLE `지하철 역 정보` (
	`statnId`	VARCHAR(20)	NOT NULL,
	`subwayList`	VARCHAR(4)	NULL,
	`statnList`	VARCHAR(10)	NULL,
	`tmsitCo`	VARCHAR(2)	NULL,
	`statnNm`	VARCHAR(10)	NULL
);

CREATE TABLE `지하철 정보` (
	`subwayID`	VARCHAR(4)	NOT NULL	COMMENT '호선이름',
	`btrainSttus`	VARCHAR(20)	NULL,
	`updnLine`	VARCHAR(1)	NULL,
	`bstatnNm`	VARCHAR(10)	NULL,
	`btrainNo`	VARCHAR(20)	NOT NULL,
	`bstatnId`	VARCHAR(20)	NOT NULL
);

CREATE TABLE `지하철 도착 정보` (
	`arvlCd`	VARCHAR(2)	NOT NULL,
	`barvlDt`	TIME	NULL,
	`recptnDt`	TIME	NULL,
	`arvlMsg2`	VARCHAR(4)	NULL,
	`arvlMsg3`	VARCHAR(30)	NULL
);

CREATE TABLE `통계적 칸별 혼잡도` (
	`stationCode`	VARCHAR(255)	NOT NULL	COMMENT '특정 역으로 진입하는 열차의 칸 별 혼잡도를 제공',
	`dow`	string	NULL,
	`hh`	string	NULL,
	`mm`	string	NULL,
	`congestionCar`	JSON	NULL	COMMENT '예) 열차의 칸이 10개인 경우: 20, 23, 21, 20, 19, 19, 17, 15, 16, 11',
	`statStartDate`	string	NULL,
	`statEndDate`	string	NULL
);

CREATE TABLE `2,3호선 실시간 혼잡도 키` (
	`subwayLine`	string	NOT NULL,
	`trainY`	string	NOT NULL
);

CREATE TABLE `2,3호선 실시간 혼잡도` (
	`trainY`	string	NOT NULL,
	`congestionCar`	string	NULL	COMMENT '열차의 칸이 10개인 경우: 34|31|31|38|41|38|30|34|38|38'
);

ALTER TABLE `지하철 위치` ADD CONSTRAINT `PK_지하철 위치` PRIMARY KEY (
	`btrainNo`
);

ALTER TABLE `지하철 역 정보` ADD CONSTRAINT `PK_지하철 역 정보` PRIMARY KEY (
	`statnId`
);

ALTER TABLE `지하철 정보` ADD CONSTRAINT `PK_지하철 정보` PRIMARY KEY (
	`subwayID`
);

ALTER TABLE `지하철 도착 정보` ADD CONSTRAINT `PK_지하철 도착 정보` PRIMARY KEY (
	`arvlCd`
);

ALTER TABLE `통계적 칸별 혼잡도` ADD CONSTRAINT `PK_통계적 칸별 혼잡도` PRIMARY KEY (
	`stationCode`
);

ALTER TABLE `2,3호선 실시간 혼잡도 키` ADD CONSTRAINT `PK_2,3호선 실시간 혼잡도 키` PRIMARY KEY (
	`subwayLine`
);

ALTER TABLE `2,3호선 실시간 혼잡도` ADD CONSTRAINT `PK_2,3호선 실시간 혼잡도` PRIMARY KEY (
	`trainY`
);

