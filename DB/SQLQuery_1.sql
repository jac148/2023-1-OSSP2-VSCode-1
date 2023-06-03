CREATE TABLE [지하철 역 정보] (
    [statnId] VARCHAR(20) NOT NULL PRIMARY KEY,
    [subwayList] VARCHAR(4) NOT NULL,
    [statnList] VARCHAR(10) NOT NULL,
    [tmsitCo] VARCHAR(2) NOT NULL,
    [statnNm] VARCHAR(10) NOT NULL
);
GO

CREATE TABLE [지하철 위치] (
    [btrainNo] VARCHAR(20) NOT NULL PRIMARY KEY,
    [trainLineNm] VARCHAR(40) NOT NULL,
    [statnFid] VARCHAR(20) NOT NULL,
    [statnTid] VARCHAR(20) NOT NULL,
    [arvlCd] VARCHAR(2) NOT NULL,
    FOREIGN KEY ([statnFid]) REFERENCES [지하철 역 정보] ([statnId]),
    FOREIGN KEY ([statnTid]) REFERENCES [지하철 역 정보] ([statnId])
);
GO

CREATE TABLE [2,3호선 실시간 혼잡도] (
    [trainY] VARCHAR(20) NOT NULL,
    [subwayLine] VARCHAR(20) NOT NULL,
    [congestionCar] VARCHAR(20) NULL,
    PRIMARY KEY ([trainY])
);
GO

CREATE TABLE [지하철 정보] (
    [subwayID] VARCHAR(4) NOT NULL,
    [btrainSttus] VARCHAR(20) NOT NULL,
    [updnLine] VARCHAR(1) NOT NULL,
    [bstatnNm] VARCHAR(10) NOT NULL,
    [btrainNo] VARCHAR(20) NOT NULL,
    [bstatnId] VARCHAR(20) NOT NULL,
    PRIMARY KEY ([subwayID]),
    FOREIGN KEY ([bstatnId]) REFERENCES [지하철 역 정보] ([statnId]),
    FOREIGN KEY ([btrainNo]) REFERENCES [2,3호선 실시간 혼잡도] ([trainY])
);
GO

CREATE TABLE [지하철 도착 정보] (
    [arvlCd] VARCHAR(2) NOT NULL,
    [barvlDt] TIME NOT NULL,
    [recptnDt] TIME NOT NULL,
    [arvlMsg2] VARCHAR(4) NULL,
    [arvlMsg3] VARCHAR(30) NULL,
    PRIMARY KEY ([arvlCd])
);
GO

CREATE TABLE [통계적 열차 혼잡도 시간] (
    [stationCode] VARCHAR(255) NOT NULL,
    [statStartDate] VARCHAR(20) NULL,
    [statEndDate] VARCHAR(20) NULL,
    [dow] VARCHAR(20) NOT NULL,
    [hh] VARCHAR(20) NOT NULL,
    [mm] VARCHAR(20) NOT NULL,
    PRIMARY KEY ([stationCode])
);
GO

CREATE TABLE [통계적 열차 혼잡도] (
    [dow] VARCHAR(20) NOT NULL,
    [hh] VARCHAR(20) NOT NULL,
    [mm] VARCHAR(20) NOT NULL,
    [congestionCar] TINYINT NOT NULL,
    PRIMARY KEY ([dow], [hh], [mm])
);
GO

CREATE TABLE [역 리스트] (
    [subwayLine] VARCHAR(20) NOT NULL,
    [stationName] VARCHAR(20) NOT NULL,
    [stationCode] VARCHAR(255) NOT NULL,
    PRIMARY KEY ([subwayLine], [stationName])
);
GO