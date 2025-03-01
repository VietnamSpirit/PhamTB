const datajs = [
    // Generation 1
    {"PersonCode": "man1", "Real Name": "Henry Carter", "Birthdate": "01/01/1549", "Death Date": "01/01/1619", "Sex": "M", "Generation": 1},
    {"PersonCode": "man1w1", "Real Name": "Alice Turner", "Birthdate": "01/01/1551", "Death Date": "01/01/1621", "Sex": "F", "Generation": 1},
    {"PersonCode": "man1w2", "Real Name": "Jane Foster", "Birthdate": "01/01/1553", "Death Date": "01/01/1623", "Sex": "F", "Generation": 1},
    
    // Generation 2 (5 children of man1, split: 3 to man1w1, 2 to man1w2)
    {"PersonCode": "C1", "Real Name": "Thomas Carter", "Birthdate": "01/01/1567", "Death Date": "01/01/1637", "Sex": "M", "Goc": "#man1", "Mother": "man1w1", "Generation": 2},
    {"PersonCode": "C2", "Real Name": "William Carter", "Birthdate": "01/01/1567", "Death Date": "01/01/1639", "Sex": "M", "Goc": "#man1", "Mother": "man1w1", "Generation": 2},
    {"PersonCode": "C3", "Real Name": "Edward Carter", "Birthdate": "01/01/1567", "Death Date": "01/01/1637", "Sex": "M", "Goc": "#man1", "Mother": "man1w1", "Generation": 2},
    {"PersonCode": "C1g", "Real Name": "Mary Carter", "Birthdate": "01/01/1571", "Death Date": "01/01/1641", "Sex": "F", "Goc": "#man1", "Mother": "man1w2", "Generation": 2},
    {"PersonCode": "C3g", "Real Name": "Ellen Carter", "Birthdate": "01/01/1571", "Death Date": "01/01/1641", "Sex": "F", "Goc": "#man1", "Mother": "man1w2", "Generation": 2},
    {"PersonCode": "C1w1", "Real Name": "Sarah Miles", "Birthdate": "01/01/1569", "Death Date": "01/01/1639", "Sex": "F", "Generation": 2},
    {"PersonCode": "C1w2", "Real Name": "Ellen Gray", "Birthdate": "01/01/1571", "Death Date": "01/01/1641", "Sex": "F", "Generation": 2},
    {"PersonCode": "C2w1", "Real Name": "Margaret Lee", "Birthdate": "01/01/1569", "Death Date": "01/01/1639", "Sex": "F", "Generation": 2},
    {"PersonCode": "C2w2", "Real Name": "Rose Evans", "Birthdate": "01/01/1571", "Death Date": "01/01/1641", "Sex": "F", "Generation": 2},
    {"PersonCode": "C3w1", "Real Name": "Grace Hill", "Birthdate": "01/01/1569", "Death Date": "01/01/1639", "Sex": "F", "Generation": 2},
    {"PersonCode": "C3w2", "Real Name": "Anne Brooks", "Birthdate": "01/01/1571", "Death Date": "01/01/1641", "Sex": "F", "Generation": 2},
    
    // Generation 3 (split children between each father's wives)
    {"PersonCode": "C1-N1", "Real Name": "Robert Carter", "Birthdate": "01/01/1585", "Death Date": "01/01/1655", "Sex": "M", "Goc": "#C1", "Mother": "C1w1", "Generation": 3},
    {"PersonCode": "C1-N2", "Real Name": "Samuel Carter", "Birthdate": "01/01/1585", "Death Date": "01/01/1655", "Sex": "M", "Goc": "#C1", "Mother": "C1w2", "Generation": 3},
    {"PersonCode": "C1-N3", "Real Name": "Charles Carter", "Birthdate": "01/01/1585", "Death Date": "01/01/1655", "Sex": "M", "Goc": "#C1", "Mother": "C1w1", "Generation": 3},
    {"PersonCode": "C1-N1w1", "Real Name": "Emily Ward", "Birthdate": "01/01/1587", "Death Date": "01/01/1657", "Sex": "F", "Generation": 3},
    {"PersonCode": "C1-N1w2", "Real Name": "Clara Dean", "Birthdate": "01/01/1589", "Death Date": "01/01/1659", "Sex": "F", "Generation": 3},
    {"PersonCode": "C1-N2w1", "Real Name": "Hannah Perry", "Birthdate": "01/01/1587", "Death Date": "01/01/1657", "Sex": "F", "Generation": 3},
    {"PersonCode": "C1-N2w2", "Real Name": "Ruth King", "Birthdate": "01/01/1589", "Death Date": "01/01/1659", "Sex": "F", "Generation": 3},
    {"PersonCode": "C1-N3w1", "Real Name": "Laura Hayes", "Birthdate": "01/01/1587", "Death Date": "01/01/1657", "Sex": "F", "Generation": 3},
    {"PersonCode": "C1-N3w2", "Real Name": "Susan Cole", "Birthdate": "01/01/1589", "Death Date": "01/01/1659", "Sex": "F", "Generation": 3},
    {"PersonCode": "C2-N1", "Real Name": "George Carter", "Birthdate": "01/01/1585", "Death Date": "01/01/1655", "Sex": "M", "Goc": "#C2", "Mother": "C2w1", "Generation": 3},
    {"PersonCode": "C2-N2", "Real Name": "Arthur Carter", "Birthdate": "01/01/1585", "Death Date": "01/01/1655", "Sex": "M", "Goc": "#C2", "Mother": "C2w2", "Generation": 3},
    {"PersonCode": "C2-N1w1", "Real Name": "Rachel King", "Birthdate": "01/01/1587", "Death Date": "01/01/1657", "Sex": "F", "Generation": 3},
    {"PersonCode": "C2-N1w2", "Real Name": "Zoe Parker", "Birthdate": "01/01/1589", "Death Date": "01/01/1659", "Sex": "F", "Generation": 3},
    {"PersonCode": "C2-N2w1", "Real Name": "Julia Shaw", "Birthdate": "01/01/1587", "Death Date": "01/01/1657", "Sex": "F", "Generation": 3},
    {"PersonCode": "C2-N2w2", "Real Name": "Eva Ross", "Birthdate": "01/01/1589", "Death Date": "01/01/1659", "Sex": "F", "Generation": 3},
    {"PersonCode": "C3-N1", "Real Name": "Philip Carter", "Birthdate": "01/01/1585", "Death Date": "01/01/1655", "Sex": "M", "Goc": "#C3", "Mother": "C3w1", "Generation": 3},
    {"PersonCode": "C3-N2", "Real Name": "John Carter", "Birthdate": "01/01/1585", "Death Date": "01/01/1655", "Sex": "M", "Goc": "#C3", "Mother": "C3w2", "Generation": 3},
    {"PersonCode": "C3-N1w1", "Real Name": "Lily Ford", "Birthdate": "01/01/1587", "Death Date": "01/01/1657", "Sex": "F", "Generation": 3},
    {"PersonCode": "C3-N1w2", "Real Name": "Nora Lane", "Birthdate": "01/01/1589", "Death Date": "01/01/1659", "Sex": "F", "Generation": 3},
    {"PersonCode": "C3-N2w1", "Real Name": "Martha Cole", "Birthdate": "01/01/1587", "Death Date": "01/01/1657", "Sex": "F", "Generation": 3},
    {"PersonCode": "C3-N2w2", "Real Name": "Grace Hart", "Birthdate": "01/01/1589", "Death Date": "01/01/1659", "Sex": "F", "Generation": 3}
];
