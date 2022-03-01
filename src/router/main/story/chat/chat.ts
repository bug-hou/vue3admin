const chat = () => import("@/views/main/story/chat/chat.vue");
export default {
	path: "/main/story/chat",
	name: "chat",
	component: chat,
	children: [],
	meta: {
		breadcrumb: [{ name: "随便聊聊" }, { name: "你的故事" }],
	},
};
