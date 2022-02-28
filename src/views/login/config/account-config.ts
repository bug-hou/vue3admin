export const rules = {
	name: [
		{
			required: true,
			message: "用户名必传",
			trigger: "blur",
		},
		{
			pattern: /^[a-z0-9]{5,10}$/i,
			message: "用户名必须为5~10个字母或者数子",
			trigger: "blur",
		},
	],
	password: [
		{
			required: true,
			message: "密码必传",
			trigger: "blur",
		},
		{
			pattern: /^[a-z0-9]{6,}$/i,
			message: "密码必须为6位以上的字母或者数子",
			trigger: "blur",
		},
	],
	phone: [
		{
			required: true,
			message: "手机号必传",
			trigger: "blur",
		},
		{
			pattern: /^\d{11}$/i,
			message: "密码必须为11位的数字",
			trigger: "blur",
		},
	],
	verify: [
		{
			required: true,
			message: "验证码必传",
			trigger: "blur",
		},
		{
			pattern: /^\d{6}$/i,
			message: "验证码必须为6位的数字",
			trigger: "blur",
		},
	],
};
