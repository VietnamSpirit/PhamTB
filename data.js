const datajs = [
    // Generation 1 (1549)
    {"ID": 1, "BranchCode": "G1", "Real Name": "Phạm Nam", "Birthyear": 1549, "Death Date": "01/01/1619", "Death Date (Vietnamese Lunar)": "11/12/1618 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "Founder of the Phạm lineage", "Gốc": null, "Generation": 1},
    {"ID": 2, "BranchCode": "G1w1", "Real Name": "Trần Nữ", "Birthyear": 1551, "Death Date": "02/02/1621", "Death Date (Vietnamese Lunar)": "12/01/1621 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "First wife", "Gốc": null, "Generation": 1},
    {"ID": 3, "BranchCode": "G1w2", "Real Name": "Lê Nữ", "Birthyear": 1552, "Death Date": "03/03/1622", "Death Date (Vietnamese Lunar)": "13/02/1622 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Second wife", "Gốc": null, "Generation": 1},

    // Generation 2 (1564)
    {"ID": 4, "BranchCode": "G2Chi1", "Real Name": "Phạm Nam", "Birthyear": 1564, "Death Date": "01/01/1634", "Death Date (Vietnamese Lunar)": "11/12/1633 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "First son of first wife", "Gốc": "#G1", "Generation": 2},
    {"ID": 5, "BranchCode": "G2Chi2", "Real Name": "Phạm Nam", "Birthyear": 1565, "Death Date": "02/02/1635", "Death Date (Vietnamese Lunar)": "12/01/1635 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "Second son of first wife", "Gốc": "#G1", "Generation": 2},
    {"ID": 6, "BranchCode": "G2Chi1g1", "Real Name": "Hoàng Nữ", "Birthyear": 1566, "Death Date": "03/03/1636", "Death Date (Vietnamese Lunar)": "13/02/1636 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Daughter of first wife", "Gốc": "#G1", "Generation": 2},
    {"ID": 7, "BranchCode": "G2Chi3", "Real Name": "Phạm Nam", "Birthyear": 1567, "Death Date": "01/01/1637", "Death Date (Vietnamese Lunar)": "11/12/1636 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "First son of second wife", "Gốc": "#G1", "Generation": 2},
    {"ID": 8, "BranchCode": "G2Chi4", "Real Name": "Phạm Nam", "Birthyear": 1568, "Death Date": "02/02/1638", "Death Date (Vietnamese Lunar)": "12/01/1638 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "Second son of second wife", "Gốc": "#G1", "Generation": 2},
    {"ID": 9, "BranchCode": "G2Chi2g1", "Real Name": "Nguyễn Nữ", "Birthyear": 1569, "Death Date": "03/03/1639", "Death Date (Vietnamese Lunar)": "13/02/1639 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Daughter of second wife", "Gốc": "#G1", "Generation": 2},
    {"ID": 10, "BranchCode": "G2Chi1w1", "Real Name": "Đặng Nữ", "Birthyear": 1566, "Death Date": "04/04/1636", "Death Date (Vietnamese Lunar)": "14/03/1636 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "First wife of G2Chi1", "Gốc": null, "Generation": 2},
    {"ID": 11, "BranchCode": "G2Chi1w2", "Real Name": "Phạm Nữ", "Birthyear": 1567, "Death Date": "05/05/1637", "Death Date (Vietnamese Lunar)": "15/04/1637 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Second wife of G2Chi1", "Gốc": null, "Generation": 2},
    {"ID": 12, "BranchCode": "G2Chi2w1", "Real Name": "Hoàng Nữ", "Birthyear": 1567, "Death Date": "06/06/1637", "Death Date (Vietnamese Lunar)": "16/05/1637 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "First wife of G2Chi2", "Gốc": null, "Generation": 2},
    {"ID": 13, "BranchCode": "G2Chi2w2", "Real Name": "Trần Nữ", "Birthyear": 1568, "Death Date": "07/07/1638", "Death Date (Vietnamese Lunar)": "17/06/1638 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Second wife of G2Chi2", "Gốc": null, "Generation": 2},
    {"ID": 14, "BranchCode": "G2Chi3w1", "Real Name": "Lê Nữ", "Birthyear": 1569, "Death Date": "08/08/1639", "Death Date (Vietnamese Lunar)": "18/07/1639 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "First wife of G2Chi3", "Gốc": null, "Generation": 2},
    {"ID": 15, "BranchCode": "G2Chi3w2", "Real Name": "Nguyễn Nữ", "Birthyear": 1570, "Death Date": "09/09/1640", "Death Date (Vietnamese Lunar)": "19/08/1640 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Second wife of G2Chi3", "Gốc": null, "Generation": 2},
    {"ID": 16, "BranchCode": "G2Chi4w1", "Real Name": "Đặng Nữ", "Birthyear": 1570, "Death Date": "10/10/1640", "Death Date (Vietnamese Lunar)": "20/09/1640 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "First wife of G2Chi4", "Gốc": null, "Generation": 2},
    {"ID": 17, "BranchCode": "G2Chi4w2", "Real Name": "Phạm Nữ", "Birthyear": 1571, "Death Date": "11/11/1641", "Death Date (Vietnamese Lunar)": "21/10/1641 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Second wife of G2Chi4", "Gốc": null, "Generation": 2},

    // Generation 3 (1579)
    {"ID": 18, "BranchCode": "G3Chi1Ng1", "Real Name": "Phạm Nam", "Birthyear": 1579, "Death Date": "01/01/1649", "Death Date (Vietnamese Lunar)": "11/12/1648 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "First son of G2Chi1w1", "Gốc": "#G2Chi1", "Generation": 3},
    {"ID": 19, "BranchCode": "G3Chi1Ng2", "Real Name": "Phạm Nam", "Birthyear": 1580, "Death Date": "02/02/1650", "Death Date (Vietnamese Lunar)": "12/01/1650 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "Second son of G2Chi1w1", "Gốc": "#G2Chi1", "Generation": 3},
    {"ID": 20, "BranchCode": "G3Chi1Ng1g1", "Real Name": "Lê Nữ", "Birthyear": 1581, "Death Date": "03/03/1651", "Death Date (Vietnamese Lunar)": "13/02/1651 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Daughter of G2Chi1w1", "Gốc": "#G2Chi1", "Generation": 3},
    {"ID": 21, "BranchCode": "G3Chi1Ng3", "Real Name": "Phạm Nam", "Birthyear": 1582, "Death Date": "01/01/1652", "Death Date (Vietnamese Lunar)": "11/12/1651 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "First son of G2Chi1w2", "Gốc": "#G2Chi1", "Generation": 3},
    {"ID": 22, "BranchCode": "G3Chi1Ng4", "Real Name": "Phạm Nam", "Birthyear": 1583, "Death Date": "02/02/1653", "Death Date (Vietnamese Lunar)": "12/01/1653 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "Second son of G2Chi1w2", "Gốc": "#G2Chi1", "Generation": 3},
    {"ID": 23, "BranchCode": "G3Chi1Ng2g1", "Real Name": "Trần Nữ", "Birthyear": 1584, "Death Date": "03/03/1654", "Death Date (Vietnamese Lunar)": "13/02/1654 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Daughter of G2Chi1w2", "Gốc": "#G2Chi1", "Generation": 3},
    {"ID": 24, "BranchCode": "G3Chi1Ng1w1", "Real Name": "Nguyễn Nữ", "Birthyear": 1581, "Death Date": "04/04/1651", "Death Date (Vietnamese Lunar)": "14/03/1651 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "First wife of G3Chi1Ng1", "Gốc": null, "Generation": 3},
    {"ID": 25, "BranchCode": "G3Chi1Ng1w2", "Real Name": "Hoàng Nữ", "Birthyear": 1582, "Death Date": "05/05/1652", "Death Date (Vietnamese Lunar)": "15/04/1652 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Second wife of G3Chi1Ng1", "Gốc": null, "Generation": 3},

    // Generation 4 (1594)
    {"ID": 26, "BranchCode": "G4Chi1Ng1Nh1", "Real Name": "Phạm Nam", "Birthyear": 1594, "Death Date": "01/01/1664", "Death Date (Vietnamese Lunar)": "11/12/1663 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "First son of G3Chi1Ng1w1", "Gốc": "#G3Chi1Ng1", "Generation": 4},
    {"ID": 27, "BranchCode": "G4Chi1Ng1Nh2", "Real Name": "Phạm Nam", "Birthyear": 1595, "Death Date": "02/02/1665", "Death Date (Vietnamese Lunar)": "12/01/1665 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "Second son of G3Chi1Ng1w1", "Gốc": "#G3Chi1Ng1", "Generation": 4},
    {"ID": 28, "BranchCode": "G4Chi1Ng1Nh1g1", "Real Name": "Phạm Nữ", "Birthyear": 1596, "Death Date": "03/03/1666", "Death Date (Vietnamese Lunar)": "13/02/1666 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Daughter of G3Chi1Ng1w1", "Gốc": "#G3Chi1Ng1", "Generation": 4},
    {"ID": 29, "BranchCode": "G4Chi1Ng1Nh3", "Real Name": "Phạm Nam", "Birthyear": 1597, "Death Date": "01/01/1667", "Death Date (Vietnamese Lunar)": "11/12/1666 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "First son of G3Chi1Ng1w2", "Gốc": "#G3Chi1Ng1", "Generation": 4},
    {"ID": 30, "BranchCode": "G4Chi1Ng1Nh4", "Real Name": "Phạm Nam", "Birthyear": 1598, "Death Date": "02/02/1668", "Death Date (Vietnamese Lunar)": "12/01/1668 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "Second son of G3Chi1Ng1w2", "Gốc": "#G3Chi1Ng1", "Generation": 4},
    {"ID": 31, "BranchCode": "G4Chi1Ng1Nh2g1", "Real Name": "Đặng Nữ", "Birthyear": 1599, "Death Date": "03/03/1669", "Death Date (Vietnamese Lunar)": "13/02/1669 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Daughter of G3Chi1Ng1w2", "Gốc": "#G3Chi1Ng1", "Generation": 4},
    {"ID": 32, "BranchCode": "G4Chi1Ng1Nh1w1", "Real Name": "Trần Nữ", "Birthyear": 1596, "Death Date": "04/04/1666", "Death Date (Vietnamese Lunar)": "14/03/1666 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "First wife of G4Chi1Ng1Nh1", "Gốc": null, "Generation": 4},
    {"ID": 33, "BranchCode": "G4Chi1Ng1Nh1w2", "Real Name": "Lê Nữ", "Birthyear": 1597, "Death Date": "05/05/1667", "Death Date (Vietnamese Lunar)": "15/04/1667 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Second wife of G4Chi1Ng1Nh1", "Gốc": null, "Generation": 4},

    // Generation 5 (1609)
    {"ID": 34, "BranchCode": "G5Chi1Ng1Nh1A", "Real Name": "Phạm Nam", "Birthyear": 1609, "Death Date": "01/01/1679", "Death Date (Vietnamese Lunar)": "11/12/1678 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "First son of G4Chi1Ng1Nh1w1", "Gốc": "#G4Chi1Ng1Nh1", "Generation": 5},
    {"ID": 35, "BranchCode": "G5Chi1Ng1Nh1B", "Real Name": "Phạm Nam", "Birthyear": 1610, "Death Date": "02/02/1680", "Death Date (Vietnamese Lunar)": "12/01/1680 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "Second son of G4Chi1Ng1Nh1w1", "Gốc": "#G4Chi1Ng1Nh1", "Generation": 5},
    {"ID": 36, "BranchCode": "G5Chi1Ng1Nh1Ag1", "Real Name": "Nguyễn Nữ", "Birthyear": 1611, "Death Date": "03/03/1681", "Death Date (Vietnamese Lunar)": "13/02/1681 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Daughter of G4Chi1Ng1Nh1w1", "Gốc": "#G4Chi1Ng1Nh1", "Generation": 5},
    {"ID": 37, "BranchCode": "G5Chi1Ng1Nh1C", "Real Name": "Phạm Nam", "Birthyear": 1612, "Death Date": "01/01/1682", "Death Date (Vietnamese Lunar)": "11/12/1681 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "First son of G4Chi1Ng1Nh1w2", "Gốc": "#G4Chi1Ng1Nh1", "Generation": 5},
    {"ID": 38, "BranchCode": "G5Chi1Ng1Nh1D", "Real Name": "Phạm Nam", "Birthyear": 1613, "Death Date": "02/02/1683", "Death Date (Vietnamese Lunar)": "12/01/1683 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": "Second son of G4Chi1Ng1Nh1w2", "Gốc": "#G4Chi1Ng1Nh1", "Generation": 5},
    {"ID": 39, "BranchCode": "G5Chi1Ng1Nh1Bg1", "Real Name": "Hoàng Nữ", "Birthyear": 1614, "Death Date": "03/03/1684", "Death Date (Vietnamese Lunar)": "13/02/1684 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "Daughter of G4Chi1Ng1Nh1w2", "Gốc": "#G4Chi1Ng1Nh1", "Generation": 5},
    {"ID": 40, "BranchCode": "G5Chi1Ng1Nh1Aw1", "Real Name": "Đặng Nữ", "Birthyear": 1611, "Death Date": "04/04/1681", "Death Date (Vietnamese Lunar)": "14/03/1681 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "First wife of G5Chi1Ng1Nh1A", "Gốc": null, "Generation": 5},

    // Fast forward to later generations...
    // Generation 12 (1891)
    {"ID": 41, "BranchCode": "G12Chi1Ng1Nh1A", "Real Name": "Phạm Nam", "Birthyear": 1891, "Death Date": "01/01/1961", "Death Date (Vietnamese Lunar)": "11/12/1960 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": null, "Gốc": "#G11Chi1Ng1Nh1", "Generation": 12},
    {"ID": 42, "BranchCode": "G12Chi1Ng1Nh1Aw1", "Real Name": "Phạm Nữ", "Birthyear": 1893, "Death Date": "02/02/1963", "Death Date (Vietnamese Lunar)": "12/01/1963 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "First wife", "Gốc": null, "Generation": 12},

    // Generation 13 (1908)
    {"ID": 43, "BranchCode": "G13Chi1Ng1Nh1A1", "Real Name": "Phạm Nam", "Birthyear": 1908, "Death Date": "01/01/1978", "Death Date (Vietnamese Lunar)": "11/12/1977 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": null, "Gốc": "#G12Chi1Ng1Nh1A", "Generation": 13},
    {"ID": 44, "BranchCode": "G13Chi1Ng1Nh1A2", "Real Name": "Phạm Nam", "Birthyear": 1909, "Death Date": "02/02/1979", "Death Date (Vietnamese Lunar)": "12/01/1979 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": null, "Gốc": "#G12Chi1Ng1Nh1A", "Generation": 13},
    {"ID": 45, "BranchCode": "G13Chi1Ng1Nh1A1g1", "Real Name": "Trần Nữ", "Birthyear": 1910, "Death Date": "03/03/1980", "Death Date (Vietnamese Lunar)": "13/02/1980 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": null, "Gốc": "#G12Chi1Ng1Nh1A", "Generation": 13},

    // Generation 14 (1925)
    {"ID": 46, "BranchCode": "G14Chi1Ng1Nh1A1B", "Real Name": "Phạm Nam", "Birthyear": 1925, "Death Date": "01/01/1995", "Death Date (Vietnamese Lunar)": "11/12/1994 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": null, "Gốc": "#G13Chi1Ng1Nh1A1", "Generation": 14},
    {"ID": 47, "BranchCode": "G14Chi1Ng1Nh1A1Bw1", "Real Name": "Lê Nữ", "Birthyear": 1927, "Death Date": "02/02/1997", "Death Date (Vietnamese Lunar)": "12/01/1997 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": "First wife", "Gốc": null, "Generation": 14},

    // Generation 15 (1942)
    {"ID": 48, "BranchCode": "G15Chi1Ng1Nh1A1B1", "Real Name": "Phạm Nam", "Birthyear": 1942, "Death Date": "01/01/2012", "Death Date (Vietnamese Lunar)": "11/12/2011 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": null, "Gốc": "#G14Chi1Ng1Nh1A1B", "Generation": 15},
    {"ID": 49, "BranchCode": "G15Chi1Ng1Nh1A1B2", "Real Name": "Phạm Nam", "Birthyear": 1943, "Death Date": "02/02/2013", "Death Date (Vietnamese Lunar)": "12/01/2013 Âm lịch", "Sex": "M", "Address": "Đông Hà", "Note": null, "Gốc": "#G14Chi1Ng1Nh1A1B", "Generation": 15},
    {"ID": 50, "BranchCode": "G15Chi1Ng1Nh1A1B1g1", "Real Name": "Nguyễn Nữ", "Birthyear": 1944, "Death Date": "03/03/2014", "Death Date (Vietnamese Lunar)": "13/02/2014 Âm lịch", "Sex": "F", "Address": "Đông Hà", "Note": null, "Gốc": "#G14Chi1Ng1Nh1A1B", "Generation": 15},

    // Generation 16 (1959)
    {"ID": 51, "BranchCode": "G16Chi1Ng1Nh1A1B1C", "Real Name": "Phạm Nam", "Birthyear": 1959, "Death Date": "", "Death Date (Vietnamese Lunar)": "", "Sex": "M", "Address": "Đông Hà", "Note": null, "Gốc": "#G15Chi1Ng1Nh1A1B1", "Generation": 16},
    {"ID": 52, "BranchCode": "G16Chi1Ng1Nh1A1B1Cw1", "Real Name": "Hoàng Nữ", "Birthyear": 1961, "Death Date": "", "Death Date (Vietnamese Lunar)": "", "Sex": "F", "Address": "Đông Hà", "Note": "First wife", "Gốc": null, "Generation": 16},

    // Generation 17 (1976)
    {"ID": 53, "BranchCode": "G17Chi1Ng1Nh1A1B1C1", "Real Name": "Phạm Nam", "Birthyear": 1976, "Death Date": "", "Death Date (Vietnamese Lunar)": "", "Sex": "M", "Address": "Đông Hà", "Note": null, "Gốc": "#G16Chi1Ng1Nh1A1B1C", "Generation": 17},
    {"ID": 54, "BranchCode": "G17Chi1Ng1Nh1A1B1C2", "Real Name": "Phạm Nam", "Birthyear": 1977, "Death Date": "", "Death Date (Vietnamese Lunar)": "", "Sex": "M", "Address": "Đông Hà", "Note": null, "Gốc": "#G16Chi1Ng1Nh1A1B1C", "Generation": 17},
    {"ID": 55, "BranchCode": "G17Chi1Ng1Nh1A1B1C1g1", "Real Name": "Đặng Nữ", "Birthyear": 1978, "Death Date": "", "Death Date (Vietnamese Lunar)": "", "Sex": "F", "Address": "Đông Hà", "Note": null, "Gốc": "#G16Chi1Ng1Nh1A1B1C", "Generation": 17},

    // Generation 18 (2001)
    {"ID": 56, "BranchCode": "G18Chi1Ng1Nh1A1B1C1D", "Real Name": "Phạm Nam", "Birthyear": 2001, "Death Date": "", "Death Date (Vietnamese Lunar)": "", "Sex": "M", "Address": "Đông Hà", "Note": null, "Gốc": "#G17Chi1Ng1Nh1A1B1C1", "Generation": 18},
    {"ID": 57, "BranchCode": "G18Chi1Ng1Nh1A1B1C1E", "Real Name": "Phạm Nam", "Birthyear": 2002, "Death Date": "", "Death Date (Vietnamese Lunar)": "", "Sex": "M", "Address": "Đông Hà", "Note": null, "Gốc": "#G17Chi1Ng1Nh1A1B1C1", "Generation": 18},
    {"ID": 58, "BranchCode": "G18Chi1Ng1Nh1A1B1C1Dg1", "Real Name": "Phạm Nữ", "Birthyear": 2003, "Death Date": "", "Death Date (Vietnamese Lunar)": "", "Sex": "F", "Address": "Đông Hà", "Note": null, "Gốc": "#G17Chi1Ng1Nh1A1B1C1", "Generation": 18}
];
