#!/usr/bin/python

compare_string = "TamilCTF{StRiNgs_C0mP4re5}"

par = [ ord(i) for i in compare_string ]

def first_encode(par):
	encode = [0]*26
	encode[0] = par[0] ^ 0x29
	encode[1] = par[1] - 0x13
	encode[2] = par[2] ^ 1
	encode[3] = (par[4] ^ 0x4a) << 2
	encode[4] = par[3] ^ 0xd7
	encode[5] = (par[6] - 9) ^ 0x6e
	encode[6] = par[7] ^ 0x7f
	encode[7] = (par[5] ^ 7) + 0x1e
	encode[8] = par[8] - 0x2f
	encode[9] = par[10] ^ 0x4d
	encode[10] = (par[9] - 0x20) << 1
	encode[11] = (par[11] ^ 0x34) // 2
	encode[12] = par[12] ^ 0x56
	encode[13] = (par[14] - 2) ^ 0x60
	encode[14] = (par[13] << 1) - 0x40
	encode[15] =  (par[15] - 3) ^ 0x14
	encode[16] = (par[16] ^ 0x2a) - 0x3f
	encode[17] = par[17] - 0xe 
	encode[18] = par[19] + 9
	encode[19] = par[18] 
	encode[20] = (par[20] - 0x14) << 1
	encode[21] = (par[22] ^ 0x52) * 2
	encode[22] = (par[21] + 2) * 2
	encode[23] = (par[23] - 0x11) //2
	encode[24] = par[24] ^ 0x1f
	encode[25] = par[25] ^ 0xb9
	c = [125, 78, 108, 152, 190, 37, 57, 98, 76, 57, 102, 51, 63, 5, 92, 100, 54, 53, 118, 48, 120, 64, 108, 42, 42, 196][::-1]
	return encode[::-1]


def find_me(par):
	flag = [0] * 26

	flag[0] = par[0] >> 2
	flag[1] = par[2] ^ 0x1f 
	flag[2] = (par[1] * 2) ^ 0xb
	flag[3] = (par[3] - 0xb) ^ 0x15
	flag[4] = (par[6] * 3) //2
	flag[5] = par[4] - 0xf
	flag[6] = (par[5]^2) - 0x45
	flag[7] = par[7] ^ 0x29
	flag[8] = (par[9] * 2 ) - 7
	flag[9] = 196 - (par[8] * 2)
	flag[10] = par[12] << 4
	flag[11] = par[10] - 5
	flag[12] = par[11] + 0x16
	flag[13] = par[14]
	flag[14] = par[16] + 0x3d
	flag[15] = par[15] ^ 0x23
	flag[16] = (par[17] * 12 ) >> 0x3 
	flag[17] = par[19] << 0x1
	flag[18] = par[18] - 0x1d
	flag[19] = (par[21] * 2 ) // 4
	flag[20] = par[20] ^ 0x46
	flag[21] = (par[13] ^ 0x2d) << 2
	flag[22] = par[23] ^ 0xd 
	flag[23] = (par[24] ^ 1) + 0x1d
	flag[24] = par[22] // 2
	flag[25] = par[25] ^ 0x42

	print ''.join([ chr(i) for i in flag])


a = first_encode(par)
find_me(a)
