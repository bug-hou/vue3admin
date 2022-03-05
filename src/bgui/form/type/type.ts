export type IFormType = "input" | "password" | "select" | "datapicker";

type IOption = {
	label: string;
	value: string | number;
};

interface IOtherOpton {
	startPlaceholder: string;
	endPlaceholder: string;
	[key: string]: string;
}

export interface IFormItem {
	label: string;
	field: string;
	placeholder?: string;
	rules?: any[];
	type: IFormType;
	options?: IOption[];
	otherOptions?: IOtherOpton;
	isHidden?: boolean;
}
