const datajs = [
    {
        "ID": 1,
        "BranchCode": "G1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1549,
        "Death Date": "01/01/1619",
        "Death Date (Vietnamese Lunar)": "5/2/1618 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Founder of the Phạm lineage | Photo: Photos/giapha/person_1.jpg",
        "Gốc": null,
        "Generation": 1
    },
    {
        "ID": 2,
        "BranchCode": "G1w1",
        "Real Name": "Trần Nữ",
        "Birthyear": 1551,
        "Death Date": "02/02/1621",
        "Death Date (Vietnamese Lunar)": "4/2/1621 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam | Photo: Photos/giapha/person_2.jpg",
        "Gốc": null,
        "Generation": 1
    },
    {
        "ID": 3,
        "BranchCode": "G2Chi1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1564,
        "Death Date": "34/01/1634",
        "Death Date (Vietnamese Lunar)": "4/2/1633 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1 | Photo: Photos/giapha/person_3.jpg",
        "Gốc": "#G1",
        "Generation": 2
    },
    {
        "ID": 4,
        "BranchCode": "G2Chi2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1565,
        "Death Date": "35/01/1635",
        "Death Date (Vietnamese Lunar)": "11/12/1634 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G1",
        "Generation": 2
    },
    {
        "ID": 5,
        "BranchCode": "G2Chi3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1566,
        "Death Date": "36/01/1636",
        "Death Date (Vietnamese Lunar)": "11/12/1635 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 3",
        "Gốc": "#G1",
        "Generation": 2
    },
    {
        "ID": 6,
        "BranchCode": "G2Chi1g1",
        "Real Name": "Trần Nữ",
        "Birthyear": 1567,
        "Death Date": "37/01/1637",
        "Death Date (Vietnamese Lunar)": "11/12/1636 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter of Trần Nữ | Photo: Photos/giapha/person_6.jpg",
        "Gốc": "#G1",
        "Generation": 2
    },
    {
        "ID": 7,
        "BranchCode": "G2Chi1w1",
        "Real Name": "Nguyễn Nữ",
        "Birthyear": 1564,
        "Death Date": "34/01/1634",
        "Death Date (Vietnamese Lunar)": "11/12/1633 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 2
    },
    {
        "ID": 8,
        "BranchCode": "G2Chi2w1",
        "Real Name": "Đặng Nữ",
        "Birthyear": 1565,
        "Death Date": "35/01/1635",
        "Death Date (Vietnamese Lunar)": "11/12/1634 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 2
    },
    {
        "ID": 9,
        "BranchCode": "G2Chi3w1",
        "Real Name": "Phạm Nữ",
        "Birthyear": 1566,
        "Death Date": "36/01/1636",
        "Death Date (Vietnamese Lunar)": "11/12/1635 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 2
    },
    {
        "ID": 10,
        "BranchCode": "G3Chi1Ng1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1579,
        "Death Date": "49/01/1649",
        "Death Date (Vietnamese Lunar)": "11/12/1648 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1 | Photo: Photos/giapha/person_10.jpg",
        "Gốc": "#G2Chi1",
        "Generation": 3
    },
    {
        "ID": 11,
        "BranchCode": "G3Chi1Ng2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1580,
        "Death Date": "50/01/1650",
        "Death Date (Vietnamese Lunar)": "11/12/1649 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G2Chi1",
        "Generation": 3
    },
    {
        "ID": 12,
        "BranchCode": "G3Chi1Ng3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1581,
        "Death Date": "51/01/1651",
        "Death Date (Vietnamese Lunar)": "11/12/1650 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 3",
        "Gốc": "#G2Chi1",
        "Generation": 3
    },
    {
        "ID": 13,
        "BranchCode": "G3Chi1Ng4",
        "Real Name": "Phạm Nam",
        "Birthyear": 1582,
        "Death Date": "52/01/1652",
        "Death Date (Vietnamese Lunar)": "11/12/1651 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 4",
        "Gốc": "#G2Chi1",
        "Generation": 3
    },
    {
        "ID": 14,
        "BranchCode": "G3Chi1Ng1g1",
        "Real Name": "Trần Nữ",
        "Birthyear": 1583,
        "Death Date": "53/01/1653",
        "Death Date (Vietnamese Lunar)": "11/12/1652 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter of Nguyễn Nữ | Photo: Photos/giapha/person_14.jpg",
        "Gốc": "#G2Chi1",
        "Generation": 3
    },
    {
        "ID": 15,
        "BranchCode": "G3Chi2Ng1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1579,
        "Death Date": "49/01/1649",
        "Death Date (Vietnamese Lunar)": "11/12/1648 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G2Chi2",
        "Generation": 3
    },
    {
        "ID": 16,
        "BranchCode": "G3Chi2Ng2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1580,
        "Death Date": "50/01/1650",
        "Death Date (Vietnamese Lunar)": "11/12/1649 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G2Chi2",
        "Generation": 3
    },
    {
        "ID": 17,
        "BranchCode": "G3Chi2Ng3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1581,
        "Death Date": "51/01/1651",
        "Death Date (Vietnamese Lunar)": "11/12/1650 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 3",
        "Gốc": "#G2Chi2",
        "Generation": 3
    },
    {
        "ID": 18,
        "BranchCode": "G3Chi2Ng4",
        "Real Name": "Phạm Nam",
        "Birthyear": 1582,
        "Death Date": "52/01/1652",
        "Death Date (Vietnamese Lunar)": "11/12/1651 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 4",
        "Gốc": "#G2Chi2",
        "Generation": 3
    },
    {
        "ID": 19,
        "BranchCode": "G3Chi3Ng1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1583,
        "Death Date": "53/01/1653",
        "Death Date (Vietnamese Lunar)": "11/12/1652 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1 | Photo: Photos/giapha/person_19.jpg",
        "Gốc": "#G2Chi3",
        "Generation": 3
    },
    {
        "ID": 20,
        "BranchCode": "G3Chi3Ng2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1584,
        "Death Date": "54/01/1654",
        "Death Date (Vietnamese Lunar)": "11/12/1653 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G2Chi3",
        "Generation": 3
    },
    {
        "ID": 21,
        "BranchCode": "G3Chi3Ng3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1585,
        "Death Date": "55/01/1655",
        "Death Date (Vietnamese Lunar)": "11/12/1654 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 3",
        "Gốc": "#G2Chi3",
        "Generation": 3
    },
    {
        "ID": 22,
        "BranchCode": "G3Chi3Ng4",
        "Real Name": "Phạm Nam",
        "Birthyear": 1586,
        "Death Date": "56/01/1656",
        "Death Date (Vietnamese Lunar)": "11/12/1655 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 4",
        "Gốc": "#G2Chi3",
        "Generation": 3
    },
    {
        "ID": 23,
        "BranchCode": "G3Chi3Ng1g1",
        "Real Name": "Trần Nữ",
        "Birthyear": 1587,
        "Death Date": "57/01/1657",
        "Death Date (Vietnamese Lunar)": "11/12/1656 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter of Phạm Nữ",
        "Gốc": "#G2Chi3",
        "Generation": 3
    },
    {
        "ID": 24,
        "BranchCode": "G3Chi1Ng1w1",
        "Real Name": "Hoàng Nữ",
        "Birthyear": 1579,
        "Death Date": "49/01/1649",
        "Death Date (Vietnamese Lunar)": "11/12/1648 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 3
    },
    {
        "ID": 25,
        "BranchCode": "G3Chi1Ng2w1",
        "Real Name": "Đặng Nữ",
        "Birthyear": 1580,
        "Death Date": "50/01/1650",
        "Death Date (Vietnamese Lunar)": "11/12/1649 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 3
    },
    {
        "ID": 26,
        "BranchCode": "G3Chi1Ng3w1",
        "Real Name": "Phạm Nữ",
        "Birthyear": 1581,
        "Death Date": "51/01/1651",
        "Death Date (Vietnamese Lunar)": "11/12/1650 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 3
    },
    {
        "ID": 27,
        "BranchCode": "G3Chi3Ng1w1",
        "Real Name": "Nguyễn Nữ",
        "Birthyear": 1583,
        "Death Date": "53/01/1653",
        "Death Date (Vietnamese Lunar)": "11/12/1652 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 3
    },
    {
        "ID": 28,
        "BranchCode": "G3Chi3Ng2w1",
        "Real Name": "Hoàng Nữ",
        "Birthyear": 1584,
        "Death Date": "54/01/1654",
        "Death Date (Vietnamese Lunar)": "11/12/1653 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 3
    },
    {
        "ID": 29,
        "BranchCode": "G3Chi3Ng3w1",
        "Real Name": "Đặng Nữ",
        "Birthyear": 1585,
        "Death Date": "55/01/1655",
        "Death Date (Vietnamese Lunar)": "11/12/1654 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 3
    },
    {
        "ID": 30,
        "BranchCode": "G3Chi3Ng4w1",
        "Real Name": "Phạm Nữ",
        "Birthyear": 1586,
        "Death Date": "56/01/1656",
        "Death Date (Vietnamese Lunar)": "11/12/1655 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 3
    },
    {
        "ID": 31,
        "BranchCode": "G4Chi1Ng1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1594,
        "Death Date": "64/01/1664",
        "Death Date (Vietnamese Lunar)": "11/12/1663 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1 | Photo: Photos/giapha/person_31.jpg",
        "Gốc": "#G3Chi1Ng1",
        "Generation": 4
    },
    {
        "ID": 32,
        "BranchCode": "G4Chi1Ng2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1595,
        "Death Date": "65/01/1665",
        "Death Date (Vietnamese Lunar)": "11/12/1664 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G3Chi1Ng2",
        "Generation": 4
    },
    {
        "ID": 33,
        "BranchCode": "G4Chi1Ng3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1596,
        "Death Date": "66/01/1666",
        "Death Date (Vietnamese Lunar)": "11/12/1665 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G3Chi1Ng2",
        "Generation": 4
    },
    {
        "ID": 34,
        "BranchCode": "G4Chi1Ng4",
        "Real Name": "Phạm Nam",
        "Birthyear": 1597,
        "Death Date": "67/01/1667",
        "Death Date (Vietnamese Lunar)": "11/12/1666 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 3",
        "Gốc": "#G3Chi1Ng2",
        "Generation": 4
    },
    {
        "ID": 35,
        "BranchCode": "G4Chi1Ng4",
        "Real Name": "Phạm Nam",
        "Birthyear": 1597,
        "Death Date": "67/01/1667",
        "Death Date (Vietnamese Lunar)": "11/12/1666 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G3Chi1Ng3",
        "Generation": 4
    },
    {
        "ID": 36,
        "BranchCode": "G4Chi1Ng4g1",
        "Real Name": "Trần Nữ",
        "Birthyear": 1598,
        "Death Date": "68/01/1668",
        "Death Date (Vietnamese Lunar)": "11/12/1667 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter of Phạm Nữ | Photo: Photos/giapha/person_36.jpg",
        "Gốc": "#G3Chi1Ng3",
        "Generation": 4
    },
    {
        "ID": 37,
        "BranchCode": "G4Chi3Ng1Nh1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1599,
        "Death Date": "69/01/1669",
        "Death Date (Vietnamese Lunar)": "11/12/1668 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G3Chi3Ng1",
        "Generation": 4
    },
    {
        "ID": 38,
        "BranchCode": "G4Chi3Ng1Nh2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1600,
        "Death Date": "70/01/1670",
        "Death Date (Vietnamese Lunar)": "11/12/1669 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G3Chi3Ng1",
        "Generation": 4
    },
    {
        "ID": 39,
        "BranchCode": "G4Chi3Ng1Nh3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1601,
        "Death Date": "71/01/1671",
        "Death Date (Vietnamese Lunar)": "11/12/1670 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 3",
        "Gốc": "#G3Chi3Ng1",
        "Generation": 4
    },
    {
        "ID": 40,
        "BranchCode": "G4Chi3Ng1Nh4",
        "Real Name": "Phạm Nam",
        "Birthyear": 1602,
        "Death Date": "72/01/1672",
        "Death Date (Vietnamese Lunar)": "11/12/1671 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 4",
        "Gốc": "#G3Chi3Ng1",
        "Generation": 4
    },
    {
        "ID": 41,
        "BranchCode": "G4Chi3Ng1Nh1g1",
        "Real Name": "Trần Nữ",
        "Birthyear": 1603,
        "Death Date": "73/01/1673",
        "Death Date (Vietnamese Lunar)": "11/12/1672 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter of Nguyễn Nữ",
        "Gốc": "#G3Chi3Ng1",
        "Generation": 4
    },
    {
        "ID": 42,
        "BranchCode": "G4Chi3Ng2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1604,
        "Death Date": "74/01/1674",
        "Death Date (Vietnamese Lunar)": "11/12/1673 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G3Chi3Ng2",
        "Generation": 4
    },
    {
        "ID": 43,
        "BranchCode": "G4Chi3Ng3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1605,
        "Death Date": "75/01/1675",
        "Death Date (Vietnamese Lunar)": "11/12/1674 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G3Chi3Ng3",
        "Generation": 4
    },
    {
        "ID": 44,
        "BranchCode": "G4Chi3Ng4",
        "Real Name": "Phạm Nam",
        "Birthyear": 1606,
        "Death Date": "76/01/1676",
        "Death Date (Vietnamese Lunar)": "11/12/1675 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G3Chi3Ng4",
        "Generation": 4
    },
    {
        "ID": 45,
        "BranchCode": "G4Chi3Ng1Nh1w1",
        "Real Name": "Hoàng Nữ",
        "Birthyear": 1599,
        "Death Date": "69/01/1669",
        "Death Date (Vietnamese Lunar)": "11/12/1668 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 4
    },
    {
        "ID": 46,
        "BranchCode": "G4Chi3Ng3w1",
        "Real Name": "Đặng Nữ",
        "Birthyear": 1605,
        "Death Date": "75/01/1675",
        "Death Date (Vietnamese Lunar)": "11/12/1674 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 4
    },
    {
        "ID": 47,
        "BranchCode": "G5Chi3Ng3Nh1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1609,
        "Death Date": "79/01/1679",
        "Death Date (Vietnamese Lunar)": "11/12/1678 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1 | Photo: Photos/giapha/person_47.jpg",
        "Gốc": "#G4Chi3Ng3",
        "Generation": 5
    },
    {
        "ID": 48,
        "BranchCode": "G5Chi3Ng3Nh2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1610,
        "Death Date": "80/01/1680",
        "Death Date (Vietnamese Lunar)": "11/12/1679 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G4Chi3Ng3",
        "Generation": 5
    },
    {
        "ID": 49,
        "BranchCode": "G5Chi3Ng3Nh3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1611,
        "Death Date": "81/01/1681",
        "Death Date (Vietnamese Lunar)": "11/12/1680 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 3",
        "Gốc": "#G4Chi3Ng3",
        "Generation": 5
    },
    {
        "ID": 50,
        "BranchCode": "G5Chi3Ng3Nh4",
        "Real Name": "Phạm Nam",
        "Birthyear": 1612,
        "Death Date": "82/01/1682",
        "Death Date (Vietnamese Lunar)": "11/12/1681 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 4",
        "Gốc": "#G4Chi3Ng3",
        "Generation": 5
    },
    {
        "ID": 51,
        "BranchCode": "G5Chi3Ng3Nh5",
        "Real Name": "Phạm Nam",
        "Birthyear": 1613,
        "Death Date": "83/01/1683",
        "Death Date (Vietnamese Lunar)": "11/12/1682 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 5",
        "Gốc": "#G4Chi3Ng3",
        "Generation": 5
    },
    {
        "ID": 52,
        "BranchCode": "G5Chi3Ng3Nh6",
        "Real Name": "Phạm Nam",
        "Birthyear": 1614,
        "Death Date": "84/01/1684",
        "Death Date (Vietnamese Lunar)": "11/12/1683 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 6",
        "Gốc": "#G4Chi3Ng3",
        "Generation": 5
    },
    {
        "ID": 53,
        "BranchCode": "G5Chi3Ng3Nh1g1",
        "Real Name": "Lê Nữ",
        "Birthyear": 1615,
        "Death Date": "85/01/1685",
        "Death Date (Vietnamese Lunar)": "11/12/1684 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 1 | Photo: Photos/giapha/person_53.jpg",
        "Gốc": "#G4Chi3Ng3",
        "Generation": 5
    },
    {
        "ID": 54,
        "BranchCode": "G5Chi3Ng3Nh1g2",
        "Real Name": "Trần Nữ",
        "Birthyear": 1616,
        "Death Date": "86/01/1686",
        "Death Date (Vietnamese Lunar)": "11/12/1685 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 2",
        "Gốc": "#G4Chi3Ng3",
        "Generation": 5
    },
    {
        "ID": 55,
        "BranchCode": "G5Chi3Ng3Nh1g3",
        "Real Name": "Lê Nữ",
        "Birthyear": 1617,
        "Death Date": "87/01/1687",
        "Death Date (Vietnamese Lunar)": "11/12/1686 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 3",
        "Gốc": "#G4Chi3Ng3",
        "Generation": 5
    },
    {
        "ID": 56,
        "BranchCode": "G5Chi3Ng3Nh1g4",
        "Real Name": "Trần Nữ",
        "Birthyear": 1618,
        "Death Date": "88/01/1688",
        "Death Date (Vietnamese Lunar)": "11/12/1687 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 4",
        "Gốc": "#G4Chi3Ng3",
        "Generation": 5
    },
    {
        "ID": 57,
        "BranchCode": "G5Chi3Ng1Nh1A1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1619,
        "Death Date": "89/01/1689",
        "Death Date (Vietnamese Lunar)": "11/12/1688 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G4Chi3Ng1Nh1",
        "Generation": 5
    },
    {
        "ID": 58,
        "BranchCode": "G5Chi3Ng1Nh1A2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1620,
        "Death Date": "90/01/1690",
        "Death Date (Vietnamese Lunar)": "11/12/1689 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G4Chi3Ng1Nh1",
        "Generation": 5
    },
    {
        "ID": 59,
        "BranchCode": "G5Chi3Ng1Nh1A3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1621,
        "Death Date": "91/01/1691",
        "Death Date (Vietnamese Lunar)": "11/12/1690 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 3",
        "Gốc": "#G4Chi3Ng1Nh1",
        "Generation": 5
    },
    {
        "ID": 60,
        "BranchCode": "G5Chi3Ng1Nh1A4",
        "Real Name": "Phạm Nam",
        "Birthyear": 1622,
        "Death Date": "92/01/1692",
        "Death Date (Vietnamese Lunar)": "11/12/1691 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 4",
        "Gốc": "#G4Chi3Ng1Nh1",
        "Generation": 5
    },
    {
        "ID": 61,
        "BranchCode": "G5Chi3Ng1Nh1A1g1",
        "Real Name": "Trần Nữ",
        "Birthyear": 1623,
        "Death Date": "93/01/1693",
        "Death Date (Vietnamese Lunar)": "11/12/1692 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter of Hoàng Nữ | Photo: Photos/giapha/person_61.jpg",
        "Gốc": "#G4Chi3Ng1Nh1",
        "Generation": 5
    },
    {
        "ID": 62,
        "BranchCode": "G5Chi3Ng1Nh1A1g2",
        "Real Name": "Lê Nữ",
        "Birthyear": 1624,
        "Death Date": "94/01/1694",
        "Death Date (Vietnamese Lunar)": "11/12/1693 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter of Hoàng Nữ",
        "Gốc": "#G4Chi3Ng1Nh1",
        "Generation": 5
    },
    {
        "ID": 63,
        "BranchCode": "G5Chi3Ng3Nh1w1",
        "Real Name": "Phạm Nữ",
        "Birthyear": 1609,
        "Death Date": "79/01/1679",
        "Death Date (Vietnamese Lunar)": "11/12/1678 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 5
    },
    {
        "ID": 64,
        "BranchCode": "G5Chi3Ng1Nh1w1",
        "Real Name": "Nguyễn Nữ",
        "Birthyear": 1619,
        "Death Date": "89/01/1689",
        "Death Date (Vietnamese Lunar)": "11/12/1688 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 5
    },
    {
        "ID": 65,
        "BranchCode": "G6Chi3Ng3Nh1A1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1624,
        "Death Date": "94/01/1694",
        "Death Date (Vietnamese Lunar)": "11/12/1693 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1 | Photo: Photos/giapha/person_65.jpg",
        "Gốc": "#G5Chi3Ng3Nh1A1",
        "Generation": 6
    },
    {
        "ID": 66,
        "BranchCode": "G6Chi3Ng3Nh1A2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1625,
        "Death Date": "95/01/1695",
        "Death Date (Vietnamese Lunar)": "11/12/1694 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G5Chi3Ng3Nh1A1",
        "Generation": 6
    },
    {
        "ID": 67,
        "BranchCode": "G6Chi3Ng3Nh1A1g1",
        "Real Name": "Lê Nữ",
        "Birthyear": 1626,
        "Death Date": "96/01/1696",
        "Death Date (Vietnamese Lunar)": "11/12/1695 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 1 | Photo: Photos/giapha/person_67.jpg",
        "Gốc": "#G5Chi3Ng3Nh1A1",
        "Generation": 6
    },
    {
        "ID": 68,
        "BranchCode": "G6Chi3Ng3Nh1A1g2",
        "Real Name": "Trần Nữ",
        "Birthyear": 1627,
        "Death Date": "97/01/1697",
        "Death Date (Vietnamese Lunar)": "11/12/1696 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 2",
        "Gốc": "#G5Chi3Ng3Nh1A1",
        "Generation": 6
    },
    {
        "ID": 69,
        "BranchCode": "G6Chi3Ng3Nh1A3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1627,
        "Death Date": "97/01/1697",
        "Death Date (Vietnamese Lunar)": "11/12/1696 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G5Chi3Ng3Nh1A2",
        "Generation": 6
    },
    {
        "ID": 70,
        "BranchCode": "G6Chi3Ng3Nh1A3g1",
        "Real Name": "Lê Nữ",
        "Birthyear": 1628,
        "Death Date": "98/01/1698",
        "Death Date (Vietnamese Lunar)": "11/12/1697 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 1",
        "Gốc": "#G5Chi3Ng3Nh1A2",
        "Generation": 6
    },
    {
        "ID": 71,
        "BranchCode": "G6Chi3Ng3Nh1A3g2",
        "Real Name": "Trần Nữ",
        "Birthyear": 1629,
        "Death Date": "99/01/1699",
        "Death Date (Vietnamese Lunar)": "11/12/1698 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 2",
        "Gốc": "#G5Chi3Ng3Nh1A2",
        "Generation": 6
    },
    {
        "ID": 72,
        "BranchCode": "G6Chi3Ng3Nh1A3g3",
        "Real Name": "Lê Nữ",
        "Birthyear": 1630,
        "Death Date": "00/01/1700",
        "Death Date (Vietnamese Lunar)": "11/12/1699 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 3",
        "Gốc": "#G5Chi3Ng3Nh1A2",
        "Generation": 6
    },
    {
        "ID": 73,
        "BranchCode": "G6Chi3Ng3Nh1A4",
        "Real Name": "Phạm Nam",
        "Birthyear": 1631,
        "Death Date": "01/01/1701",
        "Death Date (Vietnamese Lunar)": "11/12/1700 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G5Chi3Ng3Nh1A3",
        "Generation": 6
    },
    {
        "ID": 74,
        "BranchCode": "G6Chi3Ng1Nh1A1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1632,
        "Death Date": "02/01/1702",
        "Death Date (Vietnamese Lunar)": "11/12/1701 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G5Chi3Ng1Nh1A1",
        "Generation": 6
    },
    {
        "ID": 75,
        "BranchCode": "G6Chi3Ng1Nh1A2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1633,
        "Death Date": "03/01/1703",
        "Death Date (Vietnamese Lunar)": "11/12/1702 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G5Chi3Ng1Nh1A1",
        "Generation": 6
    },
    {
        "ID": 76,
        "BranchCode": "G6Chi3Ng1Nh1A3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1634,
        "Death Date": "04/01/1704",
        "Death Date (Vietnamese Lunar)": "11/12/1703 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 3",
        "Gốc": "#G5Chi3Ng1Nh1A1",
        "Generation": 6
    },
    {
        "ID": 77,
        "BranchCode": "G6Chi3Ng1Nh1A2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1635,
        "Death Date": "01/01/1968",
        "Death Date (Vietnamese Lunar)": "11/12/1967 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1 - Died young",
        "Gốc": "#G5Chi3Ng1Nh1A2",
        "Generation": 6
    },
    {
        "ID": 78,
        "BranchCode": "G6Chi3Ng1Nh1A3",
        "Real Name": "Phạm Nam",
        "Birthyear": 1636,
        "Death Date": "06/01/1706",
        "Death Date (Vietnamese Lunar)": "11/12/1705 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G5Chi3Ng1Nh1A3",
        "Generation": 6
    },
    {
        "ID": 79,
        "BranchCode": "G6Chi3Ng1Nh1A4",
        "Real Name": "Phạm Nam",
        "Birthyear": 1637,
        "Death Date": "07/01/1707",
        "Death Date (Vietnamese Lunar)": "11/12/1706 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G5Chi3Ng1Nh1A3",
        "Generation": 6
    },
    {
        "ID": 80,
        "BranchCode": "G6Chi3Ng1Nh1A5",
        "Real Name": "Phạm Nam",
        "Birthyear": 1638,
        "Death Date": "08/01/1708",
        "Death Date (Vietnamese Lunar)": "11/12/1707 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 3",
        "Gốc": "#G5Chi3Ng1Nh1A3",
        "Generation": 6
    },
    {
        "ID": 81,
        "BranchCode": "G6Chi3Ng1Nh1A6",
        "Real Name": "Phạm Nam",
        "Birthyear": 1639,
        "Death Date": "09/01/1709",
        "Death Date (Vietnamese Lunar)": "11/12/1708 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 4",
        "Gốc": "#G5Chi3Ng1Nh1A3",
        "Generation": 6
    },
    {
        "ID": 82,
        "BranchCode": "G6Chi3Ng3Nh1A1w1",
        "Real Name": "Nguyễn Nữ",
        "Birthyear": 1624,
        "Death Date": "94/01/1694",
        "Death Date (Vietnamese Lunar)": "11/12/1693 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 6
    },
    {
        "ID": 83,
        "BranchCode": "G6Chi3Ng1Nh1w1",
        "Real Name": "Hoàng Nữ",
        "Birthyear": 1632,
        "Death Date": "02/01/1702",
        "Death Date (Vietnamese Lunar)": "11/12/1701 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 6
    },
    {
        "ID": 84,
        "BranchCode": "G7Chi3Ng3Nh1A1B1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1639,
        "Death Date": "09/01/1709",
        "Death Date (Vietnamese Lunar)": "11/12/1708 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1 | Photo: Photos/giapha/person_84.jpg",
        "Gốc": "#G6Chi3Ng3Nh1A1B1",
        "Generation": 7
    },
    {
        "ID": 85,
        "BranchCode": "G7Chi3Ng3Nh1A1B2",
        "Real Name": "Phạm Nam",
        "Birthyear": 1640,
        "Death Date": "10/01/1710",
        "Death Date (Vietnamese Lunar)": "11/12/1709 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 2",
        "Gốc": "#G6Chi3Ng3Nh1A1B1",
        "Generation": 7
    },
    {
        "ID": 86,
        "BranchCode": "G7Chi3Ng3Nh1A1B1g1",
        "Real Name": "Trần Nữ",
        "Birthyear": 1641,
        "Death Date": "11/01/1711",
        "Death Date (Vietnamese Lunar)": "11/12/1710 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter of Nguyễn Nữ | Photo: Photos/giapha/person_86.jpg",
        "Gốc": "#G6Chi3Ng3Nh1A1B1",
        "Generation": 7
    },
    {
        "ID": 87,
        "BranchCode": "G7Chi3Ng1Nh1A1B1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1642,
        "Death Date": "12/01/1712",
        "Death Date (Vietnamese Lunar)": "11/12/1711 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G6Chi3Ng1Nh1A1B1",
        "Generation": 7
    },
    {
        "ID": 88,
        "BranchCode": "G7Chi3Ng1Nh1A1B1g1",
        "Real Name": "Trần Nữ",
        "Birthyear": 1643,
        "Death Date": "13/01/1713",
        "Death Date (Vietnamese Lunar)": "11/12/1712 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter of Hoàng Nữ",
        "Gốc": "#G6Chi3Ng1Nh1A1B1",
        "Generation": 7
    },
    {
        "ID": 89,
        "BranchCode": "G7Chi3Ng1Nh1A1B2g1",
        "Real Name": "Lê Nữ",
        "Birthyear": 1644,
        "Death Date": "14/01/1714",
        "Death Date (Vietnamese Lunar)": "11/12/1713 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 1",
        "Gốc": "#G6Chi3Ng1Nh1A1B2",
        "Generation": 7
    },
    {
        "ID": 90,
        "BranchCode": "G7Chi3Ng1Nh1A1B2g2",
        "Real Name": "Trần Nữ",
        "Birthyear": 1645,
        "Death Date": "15/01/1715",
        "Death Date (Vietnamese Lunar)": "11/12/1714 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 2",
        "Gốc": "#G6Chi3Ng1Nh1A1B2",
        "Generation": 7
    },
    {
        "ID": 91,
        "BranchCode": "G7Chi3Ng1Nh1A1B2g3",
        "Real Name": "Lê Nữ",
        "Birthyear": 1646,
        "Death Date": "16/01/1716",
        "Death Date (Vietnamese Lunar)": "11/12/1715 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 3",
        "Gốc": "#G6Chi3Ng1Nh1A1B2",
        "Generation": 7
    },
    {
        "ID": 92,
        "BranchCode": "G7Chi3Ng1Nh1A1B2g4",
        "Real Name": "Trần Nữ",
        "Birthyear": 1647,
        "Death Date": "17/01/1717",
        "Death Date (Vietnamese Lunar)": "11/12/1716 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter 4",
        "Gốc": "#G6Chi3Ng1Nh1A1B2",
        "Generation": 7
    },
    {
        "ID": 93,
        "BranchCode": "G7Chi3Ng3Nh1A1B1w1",
        "Real Name": "Phạm Nữ",
        "Birthyear": 1639,
        "Death Date": "09/01/1709",
        "Death Date (Vietnamese Lunar)": "11/12/1708 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 7
    },
    {
        "ID": 94,
        "BranchCode": "G16Chi3Ng3Nh1A1B1C1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1784,
        "Death Date": "54/01/1854",
        "Death Date (Vietnamese Lunar)": "11/12/1853 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1 | Photo: Photos/giapha/person_94.jpg",
        "Gốc": "#G7Chi3Ng3Nh1A1B1",
        "Generation": 16
    },
    {
        "ID": 95,
        "BranchCode": "G16Chi3Ng3Nh1A1B1w1",
        "Real Name": "Nguyễn Nữ",
        "Birthyear": 1784,
        "Death Date": "54/01/1854",
        "Death Date (Vietnamese Lunar)": "11/12/1853 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 16
    },
    {
        "ID": 96,
        "BranchCode": "G17Chi3Ng3Nh1A1B1C1D1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1801,
        "Death Date": "71/01/1871",
        "Death Date (Vietnamese Lunar)": "11/12/1870 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G16Chi3Ng3Nh1A1B1C1",
        "Generation": 17
    },
    {
        "ID": 97,
        "BranchCode": "G17Chi3Ng3Nh1A1B1C1g1",
        "Real Name": "Trần Nữ",
        "Birthyear": 1802,
        "Death Date": "72/01/1872",
        "Death Date (Vietnamese Lunar)": "11/12/1871 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter of Nguyễn Nữ | Photo: Photos/giapha/person_97.jpg",
        "Gốc": "#G16Chi3Ng3Nh1A1B1C1",
        "Generation": 17
    },
    {
        "ID": 98,
        "BranchCode": "G17Chi3Ng3Nh1A1B1C1w1",
        "Real Name": "Hoàng Nữ",
        "Birthyear": 1801,
        "Death Date": "71/01/1871",
        "Death Date (Vietnamese Lunar)": "11/12/1870 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Wife of Phạm Nam",
        "Gốc": null,
        "Generation": 17
    },
    {
        "ID": 99,
        "BranchCode": "G18Chi3Ng3Nh1A1B1C1D1E1",
        "Real Name": "Phạm Nam",
        "Birthyear": 1826,
        "Death Date": "96/01/1896",
        "Death Date (Vietnamese Lunar)": "11/12/1895 Âm lịch",
        "Sex": "M",
        "Address": "Đông Hà",
        "Note": "Son 1",
        "Gốc": "#G17Chi3Ng3Nh1A1B1C1D1",
        "Generation": 18
    },
    {
        "ID": 100,
        "BranchCode": "G18Chi3Ng3Nh1A1B1C1D1g1",
        "Real Name": "Trần Nữ",
        "Birthyear": 1827,
        "Death Date": "97/01/1897",
        "Death Date (Vietnamese Lunar)": "11/12/1896 Âm lịch",
        "Sex": "F",
        "Address": "Đông Hà",
        "Note": "Daughter of Hoàng Nữ",
        "Gốc": "#G17Chi3Ng3Nh1A1B1C1D1",
        "Generation": 18
    }
];
