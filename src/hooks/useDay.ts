type IDate = [number | string | Date];

export class Day {
	$d: any;
	$year: number;
	$month: number;
	$day: number;
	$date: number;
	$hours: number;
	$minutes: number;
	$seconds: number;
	constructor(...arg: IDate) {
		this.$d = new Date(...arg);
		this.$year = this.$d.getFullYear();
		this.$month = this.$d.getMonth();
		this.$day = this.$d.getDay();
		this.$date = this.$d.getDate();
		this.$hours = this.$d.getHours();
		this.$minutes = this.$d.getMinutes();
		this.$seconds = this.$d.getSeconds();
	}
	// 可以设置和获取到date值
	year(value?: number) {
		if (!this.isUndefined(value) || !this.isNull(value)) {
			if (this.isNumber(value)) {
				this.$year = this.$d.getFullYear();
				this.$d.setFullYear(value);
			} else {
				console.warn("请传递数字");
			}
			return this;
		} else {
			return this.$year;
		}
	}
	month(value?: number) {
		if (!this.isUndefined(value) || !this.isNull(value)) {
			if (this.isNumber(value)) {
				this.$month = this.$d.getMonth();
				this.$d.setMonth(value);
			} else {
				console.warn("请传递数字");
			}
			return this;
		} else {
			return this.$month;
		}
	}
	date(value?: number) {
		if (!this.isUndefined(value) || !this.isNull(value)) {
			if (this.isNumber(value)) {
				this.$date = this.$d.getDate();
				this.$d.setDate(value);
			} else {
				console.warn("请传递数字");
			}
			return this;
		} else {
			return this.$date;
		}
	}
	hours(value?: number) {
		if (!this.isUndefined(value) || !this.isNull(value)) {
			if (this.isNumber(value)) {
				this.$d.setHours(value);
				this.$hours = this.$d.getHours();
			} else {
				console.warn("请传递数字");
			}
			return this;
		} else {
			return this.$hours;
		}
	}
	minutes(value?: number) {
		if (!this.isUndefined(value) || !this.isNull(value)) {
			if (this.isNumber(value)) {
				this.$minutes = this.$d.getMinutes();
				this.$d.setMinutes(value);
			} else {
				console.warn("请传递数字");
			}
			return this;
		} else {
			return this.$minutes;
		}
	}
	seconds(value?: number) {
		if (!this.isUndefined(value) || !this.isNull(value)) {
			if (this.isNumber(value)) {
				this.$seconds = this.$d.getSeconds();
				this.$d.setSeconds(value);
			} else {
				console.warn("请传递数字");
			}
			return this;
		} else {
			return this.$seconds;
		}
	}
	day() {
		return this.$day;
	}
	format(str: string) {
		const { $year, $month, $date, $day, $hours, $minutes, $seconds } = this;
		const matches = {
			YY: String($year).slice(-2),
			YYYY: $year,
			M: $month + 1,
			MM: String($month + 1).padStart(2, "0"),
			D: $date,
			DD: String($date).padStart(2, "0"),
			d: String($day),
			H: String($hours),
			HH: String($hours).padStart(2, "0"),
			h: String($hours % 12 || 12).padStart(1, "0"),
			hh: String($hours % 12 || 12).padStart(2, "0"),
			m: String($minutes),
			mm: String($minutes).padStart(2, "0"),
			s: String($seconds),
			ss: String($seconds).padStart(2, "0"),
		};
		return str.replace(
			/\[([^\]]+)]|Y{1,4}|M{1,2}|D{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}/g,
			(match) => matches[match]
		);
	}
	isUndefined(value: any) {
		return typeof value === "undefined";
	}
	isNull(value: any) {
		return value === null;
	}
	isNumber(value: any) {
		return typeof value === "number";
	}
}
