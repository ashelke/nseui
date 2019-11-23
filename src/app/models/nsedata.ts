export interface NSE {
	data: {
        [key: string]: Item
    };
    dataAvg: String;
    uvCurr: String;
    atm_call_iv: String;
    atm_put_iv: String;
    maxDatetime: String;
}
export interface Item {
    Datetime: String;
	Time: String;
	decay: String;
	lastPrice: String;
	maxltp : String;
	type: String;
	strikePrice: String;
	openInterest: String;
	decayAvg: String;
	decayRevSum: String;
	changeinOpenInterestmax1: String;
	changeinOpenInterestmax2: String;
	changeinOpenInterestmax3: String;
	impliedVolatilitymax1: String;
	impliedVolatilitymax2: String;
	impliedVolatilitymax3: String;
	totalTradedVolumemax1: String;
	totalTradedVolumemax2: String;
	totalTradedVolumemax3: String;
	winningProb: String;
}

