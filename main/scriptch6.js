const valoresChapas = {
  "3,18 1/8\" CHAPA (3,18) 1/8 SAE-1045 1500 X 6000": 24.96 * 9,
  "4,75 3/16\" CHAPA (4,75) 3/16 SAE 1045 1500 X 6000": 37.29 * 9,
  "6,35 1/4\" CHAPA (6,35) 1/4 A-36/SAE-1045 1500 X 6000": 49.85 * 9,
  "8 5/16\" CHAPA (8) 5/16 A-36/SAE-1045 1500 X 6000": 62.8 * 9,
  "9,53 3/8\" CHAPA (9,53) 3/8 A-36/SAE-1045 1500 X 6000": 74.81 * 9,
  "12,7 1/2\" CHAPA (12,7) 1/2 A-36/SAE-1045 1500 X 6000": 99.7 * 9,
  "15,9 5/8\" CHAPA (15,9) 5/8 A-36/SAE-1045 1500 X 6000": 124.66 * 9,
  "19,1 3/4\" CHAPA (19,1) 3/4 A-36/SAE-1045 1500 X 6000": 149.54 * 9,
  "22,2 7/8\" CHAPA (22,2) 7/8 A-36/SAE-1045 1500 X 6000": 174.51 * 9,
  "25,4 1\" CHAPA (25,4) 1 A-36/SAE-1045 1500 X 6000": 199.39 * 9,
  "31,8 1 1/4\" CHAPA (31,8) 1.1/4 A-36/SAE-1045 1500 X 6000": 249.24 * 9,
  "38,1 1 1/2\" CHAPA (38,1) 1.1/2 A-36/SAE-1045 1500 X 6000": 299.09 * 9,
  "41,3 1 5/8\" CHAPA (41,3) 1.5/8 A-36/SAE-1045 1500 X 6000": 324.05 * 9,
  "44,5 1 3/4\" CHAPA (44,5) 1.3/4 A-36/SAE-1045 1500 X 6000": 348.93 * 9,
  "50,8 2\" CHAPA (50,8) 2 A-36/SAE-1045 1500 X 6000": 398.78 * 9,
  "57,2 2 1/4\" CHAPA (57,2) 2.1/4 A-36/SAE-1045 1500 X 6000": 448.63 * 9,
  "63,5 2 1/2\" CHAPA (63,5) 2.1/2 A-36/SAE-1045 1500 X 6000": 498.48 * 9,
  "76,2 3\" CHAPA (76,2) 3 A-36/SAE-1045 1500 X 6000": 598.17 * 9,
  "88,9 3 1/2\" CHAPA (88,9) 3.1/2 A-36/SAE-1045 1500 X 6000": 697.87 * 9,
  "102 4\" CHAPA (102) 4 A-36/SAE-1045 1500 X 6000": 797.56 * 9,
  "114 4 1/2\" CHAPA (114) 4.1/2 A-36/SAE-1045 1500 X 6000": 897.26 * 9,
  "127 5\" CHAPA (127) 5 A-36/SAE-1045 1500 X 6000": 996.95 * 9,
  "140 5 1/2\" CHAPA (140) 5.1/2 A-36/SAE-1045 1500 X 6000": 1096.65 * 9,
  "152 6\" CHAPA (152) 6 A-36/SAE-1045 1500 X 6000": 1196.34 * 9,
  "165 6 1/2\" CHAPA (165) 6.1/2 A-36/SAE-1045 1500 X 6000": 1296.04 * 9,
  "178 7\" CHAPA (178) 7 A-36/SAE-1045 1500 X 6000": 1395.73 * 9,
  "203 8\" CHAPA (203) 8 A-36/SAE-1045 1500 X 6000": 1595.12 * 9,
  "229 9\" CHAPA (229) 9 A-36/SAE-1045 1500 X 6000": 1794.51 * 9,
  "254 10\" CHAPA (254) 10 A-36/SAE-1045 1500 X 6000": 1993.9 * 9,
  "279 11\" CHAPA (279) 11 A-36/SAE-1045 1500 X 6000": 2193.29 * 9,



  "3,18 1/8 CHAPA (3,18) 1/8 SAE-1045 1200 X 6000": 24.96 * 7.20,
  "4,75 3/16 CHAPA (4,75) 3/16 SAE 1045 1200 X 6000": 37.29 * 7.20,
  "6,35 1/4 CHAPA (6,35) 1/4 A-36/SAE-1045 1200 X 6000": 49.85 * 7.20,
  "8 5/16 CHAPA (8) 5/16 A-36/SAE-1045 1200 X 6000": 62.8 * 7.20,
  "9,53 3/8 CHAPA (9,53) 3/8 A-36/SAE-1045 1200 X 6000": 74.81 * 7.20,
  "12,7 1/2 CHAPA (12,7) 1/2 A-36/SAE-1045 1200 X 6000": 99.7 * 7.20,
  "15,9 5/8 CHAPA (15,9) 5/8 A-36/SAE-1045 1200 X 6000": 124.66 * 7.20,
  "19,1 3/4 CHAPA (19,1) 3/4 A-36/SAE-1045 1200 X 6000": 149.54 * 7.20,
  "22,2 7/8 CHAPA (22,2) 7/8 A-36/SAE-1045 1200 X 6000": 174.51 * 7.20,
  "25,4 1 CHAPA (25,4) 1 A-36/SAE-1045 1200 X 6000": 199.39 * 7.20,
  "31,8 1 1/4 CHAPA (31,8) 1.1/4 A-36/SAE-1045 1200 X 6000": 249.24 * 7.20,
  "38,1 1 1/2 CHAPA (38,1) 1.1/2 A-36/SAE-1045 1200 X 6000": 299.09 * 7.20,
  "41,3 1 5/8 CHAPA (41,3) 1.5/8 A-36/SAE-1045 1200 X 6000": 324.05 * 7.20,
  "44,5 1 3/4 CHAPA (44,5) 1.3/4 A-36/SAE-1045 1200 X 6000": 348.93 * 7.20,
  "50,8 2 CHAPA (50,8) 2 A-36/SAE-1045 1200 X 6000": 398.78 * 7.20,
  "57,2 2 1/4 CHAPA (57,2) 2.1/4 A-36/SAE-1045 1200 X 6000": 448.63 * 7.20,
  "63,5 2 1/2 CHAPA (63,5) 2.1/2 A-36/SAE-1045 1200 X 6000": 498.48 * 7.20,
  "76,2 3 CHAPA (76,2) 3 A-36/SAE-1045 1200 X 6000": 598.17 * 7.20,
  "88,9 3 1/2 CHAPA (88,9) 3.1/2 A-36/SAE-1045 1200 X 6000": 697.87 * 7.20,
  "102 4 CHAPA (102) 4 A-36/SAE-1045 1200 X 6000": 797.56 * 9,
  "114 4 1/2 CHAPA (114) 4.1/2 A-36/SAE-1045 1200 X 6000": 897.26 * 7.20,
  "127 5 CHAPA (127) 5 A-36/SAE-1045 1200 X 6000": 996.95 * 7.20,
  "140 5 1/2 CHAPA (140) 5.1/2 A-36/SAE-1045 1200 X 6000": 1096.65 * 7.20,
  "152 6 CHAPA (152) 6 A-36/SAE-1045 1200 X 6000": 1196.34 * 7.20,
  "165 6 1/2 CHAPA (165) 6.1/2 A-36/SAE-1045 1200 X 6000": 1296.04 * 7.20,
  "178 7 CHAPA (178) 7 A-36/SAE-1045 1200 X 6000": 1395.73 * 7.20,
  "203 8 CHAPA (203) 8 A-36/SAE-1045 1200 X 6000": 1595.12 * 7.20,
  "229 9 CHAPA (229) 9 A-36/SAE-1045 1200 X 6000": 1794.51 * 7.20,
  "254 10 CHAPA (254) 10 A-36/SAE-1045 1200 X 6000": 1993.9 * 7.20,
  "279 11 CHAPA (279) 11 A-36/SAE-1045 1200 X 6000": 2193.29 * 7.20,
  


  "3,18 1/8 CHAPA (3,18) 1/8 SAE-1045 2440 X 6000": 24.96 * 14.640,
  "4,75 3/16 CHAPA (4,75) 3/16 SAE 1045 2440 X 6000": 37.29 * 14.640,
  "6,35 1/4 CHAPA (6,35) 1/4 A-36/SAE-1045 2440 X 6000": 49.85 * 14.640,
  "8 5/16 CHAPA (8) 5/16 A-36/SAE-1045 2440 X 6000": 62.8 * 14.640,
  "9,53 3/8 CHAPA (9,53) 3/8 A-36/SAE-1045 2440 X 6000": 74.81 * 14.640,
  "12,7 1/2 CHAPA (12,7) 1/2 A-36/SAE-1045 2440 X 6000": 99.7 * 14.640,
  "15,9 5/8 CHAPA (15,9) 5/8 A-36/SAE-1045 2440 X 6000": 124.66 * 14.640,
  "19,1 3/4 CHAPA (19,1) 3/4 A-36/SAE-1045 2440 X 6000": 149.54 * 14.640,
  "22,2 7/8 CHAPA (22,2) 7/8 A-36/SAE-1045 2440 X 6000": 174.51 * 14.640,
  "25,4 1 CHAPA (25,4) 1 A-36/SAE-1045 2440 X 6000": 199.39 * 14.640,
  "31,8 1 1/4 CHAPA (31,8) 1.1/4 A-36/SAE-1045 2440 X 6000": 249.24 * 14.640,
  "38,1 1 1/2 CHAPA (38,1) 1.1/2 A-36/SAE-1045 2440 X 6000": 299.09 * 14.640,
  "41,3 1 5/8 CHAPA (41,3) 1.5/8 A-36/SAE-1045 2440 X 6000": 324.05 * 14.640,
  "44,5 1 3/4 CHAPA (44,5) 1.3/4 A-36/SAE-1045 2440 X 6000": 348.93 * 14.640,
  "50,8 2 CHAPA (50,8) 2 A-36/SAE-1045 2440 X 6000": 398.78 * 14.640,
  "57,2 2 1/4 CHAPA (57,2) 2.1/4 A-36/SAE-1045 2440 X 6000": 448.63 * 14.640,
  "63,5 2 1/2 CHAPA (63,5) 2.1/2 A-36/SAE-1045 2440 X 6000": 498.48 * 14.640,
  "76,2 3 CHAPA (76,2) 3 A-36/SAE-1045 2440 X 6000": 598.17 * 14.640,
  "88,9 3 1/2 CHAPA (88,9) 3.1/2 A-36/SAE-1045 2440 X 6000": 697.87 * 14.640,
  "102 4 CHAPA (102) 4 A-36/SAE-1045 2440 X 6000": 797.56 * 14.640,
  "114 4 1/2 CHAPA (114) 4.1/2 A-36/SAE-1045 2440 X 6000": 897.26 * 14.640,
  "127 5 CHAPA (127) 5 A-36/SAE-1045 2440 X 6000": 996.95 * 14.640,
  "140 5 1/2 CHAPA (140) 5.1/2 A-36/SAE-1045 2440 X 6000": 1096.65 * 14.640,
  "152 6 CHAPA (152) 6 A-36/SAE-1045 2440 X 6000": 1196.34 * 14.640,
  "165 6 1/2 CHAPA (165) 6.1/2 A-36/SAE-1045 2440 X 6000": 1296.04 * 14.640,
  "178 7 CHAPA (178) 7 A-36/SAE-1045 2440 X 6000": 1395.73 * 14.640,
  "203 8 CHAPA (203) 8 A-36/SAE-1045 2440 X 6000": 1595.12 * 14.640,
  "229 9 CHAPA (229) 9 A-36/SAE-1045 2440 X 6000": 1794.51 * 14.640,
  "254 10 CHAPA (254) 10 A-36/SAE-1045 2440 X 6000": 1993.9 * 14.640,
  "279 11 CHAPA (279) 11 A-36/SAE-1045 2440 X 6000": 2193.29 * 14.640,


  "3,18 1/8 CHAPA (3,18) 1/8 SAE-1045 1200 X 3000": 24.96 * 3.60,
  "4,75 3/16 CHAPA (4,75) 3/16 SAE 1045 1200 X 3000": 37.29 * 3.60,
  "6,35 1/4 CHAPA (6,35) 1/4 A-36/SAE-1045 1200 X 3000": 49.85 * 3.60,
  "8 5/16 CHAPA (8) 5/16 A-36/SAE-1045 1200 X 3000": 62.8 * 3.60,
  "9,53 3/8 CHAPA (9,53) 3/8 A-36/SAE-1045 1200 X 3000": 74.81 * 3.60,
  "12,7 1/2 CHAPA (12,7) 1/2 A-36/SAE-1045 1200 X 3000": 99.7 * 3.60,
  "15,9 5/8 CHAPA (15,9) 5/8 A-36/SAE-1045 1200 X 3000": 124.66 * 3.60,
  "19,1 3/4 CHAPA (19,1) 3/4 A-36/SAE-1045 1200 X 3000": 149.54 * 3.60,
  "22,2 7/8 CHAPA (22,2) 7/8 A-36/SAE-1045 1200 X 3000": 174.51 * 3.60,
  "25,4 1 CHAPA (25,4) 1 A-36/SAE-1045 1200 X 3000": 199.39 * 3.60,
  "31,8 1 1/4 CHAPA (31,8) 1.1/4 A-36/SAE-1045 1200 X 3000": 249.24 * 3.60,
  "38,1 1 1/2 CHAPA (38,1) 1.1/2 A-36/SAE-1045 1200 X 3000": 299.09 * 3.60,
  "41,3 1 5/8 CHAPA (41,3) 1.5/8 A-36/SAE-1045 1200 X 3000": 324.05 * 3.60,
  "44,5 1 3/4 CHAPA (44,5) 1.3/4 A-36/SAE-1045 1200 X 3000": 348.93 * 3.60,
  "50,8 2 CHAPA (50,8) 2 A-36/SAE-1045 1200 X 3000": 398.78 * 3.60,
  "57,2 2 1/4 CHAPA (57,2) 2.1/4 A-36/SAE-1045 1200 X 3000": 448.63 * 3.60,
  "63,5 2 1/2 CHAPA (63,5) 2.1/2 A-36/SAE-1045 1200 X 3000": 498.48 * 3.60,
  "76,2 3 CHAPA (76,2) 3 A-36/SAE-1045 1200 X 3000": 598.17 * 3.60,
  "88,9 3 1/2 CHAPA (88,9) 3.1/2 A-36/SAE-1045 1200 X 3000": 697.87 * 3.60,
  "102 4 CHAPA (102) 4 A-36/SAE-1045 1200 X 3000": 797.56 * 3.60,
  "114 4 1/2 CHAPA (114) 4.1/2 A-36/SAE-1045 1200 X 3000": 897.26 * 3.60,
  "127 5 CHAPA (127) 5 A-36/SAE-1045 1200 X 3000": 996.95 * 3.60,
  "140 5 1/2 CHAPA (140) 5.1/2 A-36/SAE-1045 1200 X 3000": 1096.65 * 3.60,
  "152 6 CHAPA (152) 6 A-36/SAE-1045 1200 X 3000": 1196.34 * 3.60,
  "165 6 1/2 CHAPA (165) 6.1/2 A-36/SAE-1045 1200 X 3000": 1296.04 * 3.60,
  "178 7 CHAPA (178) 7 A-36/SAE-1045 1200 X 3000": 1395.73 * 3.60,
  "203 8 CHAPA (203) 8 A-36/SAE-1045 1200 X 3000": 1595.12 * 3.60,
  "229 9 CHAPA (229) 9 A-36/SAE-1045 1200 X 3000": 1794.51 * 3.60,
  "254 10 CHAPA (254) 10 A-36/SAE-1045 1200 X 3000": 1993.9 * 3.60,
  "279 11 CHAPA (279) 11 A-36/SAE-1045 1200 X 3000": 2193.29 * 3.60,


  "CHAPA XADREZ 1/8 1200 X 3000": 27 * 3.60,
  "CHAPA XADREZ 1/8 1500 X 6000": 27 * 9,

  "CHAPA XADREZ 3/16 1200 X 3000": 41 * 3.60,
  "CHAPA XADREZ 3/16 1500 X 6000": 41 * 9,

  "CHAPA XADREZ 1/4 1200 X 3000": 54 * 3.60,
  "CHAPA XADREZ 1/4 1500 X 6000": 54 * 9,

  "CHAPA XADREZ 5/16 1200 X 3000": 68 * 3.60,
  "CHAPA XADREZ 5/16 1500 X 6000": 68 * 9,

  "CHAPA XADREZ 3/8 1200 X 3000": 81 * 3.60,
  "CHAPA XADREZ 3/8 1500 X 6000": 81 * 9,

  "	CHAPA INOX	-	ESPESSURA:	0,3	":	2.4	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	0,4	":	3.1	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	0,5	":	3.9	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	0,6	":	4.7	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	0,7	":	5.5	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	0,8	":	6.3	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	0,9	":	7.1	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	1	":	7.9	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	1,2	":	9.4	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	1,5	":	11.8	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	1,8	":	14.1	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	2	":	15.7	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	2,5	":	19.6	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	2,6	":	20.4	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	2,75	":	21.6	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	3	":	23.6	* 4.50,
  "	CHAPA INOX	1/8	ESPESSURA:	3,18	":	25.0	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	3,5	":	27.5	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	4	":	31.4	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	4,5	":	35.3	* 4.50,
  "	CHAPA INOX	3/16	ESPESSURA:	4,76	":	37.4	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	5	":	39.3	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	6	":	47.1	* 4.50,
  "	CHAPA INOX	1/4	ESPESSURA:	6,35	":	49.8	* 4.50,
  "	CHAPA INOX	5/16	ESPESSURA:	7,93	":	62.3	* 4.50,
  "	CHAPA INOX	3/8	ESPESSURA:	9,53	":	74.8	* 4.50,
  "	CHAPA INOX	-	ESPESSURA:	10	":	78.5	* 4.50,
  "	CHAPA INOX	1/2	ESPESSURA:	12,7	":	99.7	* 4.50,
  "	CHAPA INOX	5/8	ESPESSURA:	15,87	":	124.6	* 4.50,
  "	CHAPA INOX	3/4	ESPESSURA:	19,05	":	149.5	* 4.50,
  "	CHAPA INOX	7/8	ESPESSURA:	22,22	":	174.4	* 4.50,
  "	CHAPA INOX	1	ESPESSURA:	25,4	":	199.4	* 4.50,
  "	CHAPA INOX	1.1/8	ESPESSURA:	28,57	":	224.3	* 4.50,
  "	CHAPA INOX	1.1/4	ESPESSURA:	31,75	":	249.2	* 4.50,
  "	CHAPA INOX	1.1/2	ESPESSURA:	38,1	":	299.1	* 4.50,
  "	CHAPA INOX	1.3/4	ESPESSURA:	44,45	":	348.9	* 4.50,
  "	CHAPA INOX	2	ESPESSURA:	50,8	":	398.8	* 4.50,
  "	CHAPA INOX	2.1/4	ESPESSURA:	57,15	":	448.6	* 4.50,
  "	CHAPA INOX	2.1/2	ESPESSURA:	63,5	":	498.5	* 4.50,
  
  

};

function calcularValor() {
const medidaSelect = document.getElementById("medida");
const quantidadeInput = document.getElementById("quantidade");
const resultadoElement = document.getElementById("resultado");

const medida = medidaSelect.value;
const quantidade = parseFloat(quantidadeInput.value);

if (valoresChapas[medida]) {
const resultado = (valoresChapas[medida] * quantidade).toFixed(2);
resultadoElement.textContent = `TOTAL ${resultado} Kg.`;
} else {
resultadoElement.textContent = "Chapa não encontrada na lista.";
}
}
