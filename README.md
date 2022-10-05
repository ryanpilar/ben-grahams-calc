# 🚀 The Ben Graham Screener

---
![image](https://user-images.githubusercontent.com/102194829/193968790-0b9f85eb-beda-45f1-851f-c2034fde146a.png)

---

## 👋  Introduction

This is a fin-tech application that integrates with financial market data, and sorts said equities according to Ben Graham’s interpretation of value investing and margin of safety. 
<br><br>
Users have the ability to sign-in, search tickers, make custom lists and export their findings to csv/xcel.

---

## 🤷‍♂️  Who is this for? 

It's for people that want to value invest and who are interested in the principals that Ben Graham presents

---

## 💪  Packages/Dependencies

HTML | CSS | React | json-server | react-router-dom 

---

## 🖥  How to run / Available Scripts

To demo: In the project directory, first `npm install`, than `npm run server`, than `npm run start`:

### `npm server`
Runs/starts the json server to interact with the task data
Open [http://localhost:5000/tasks](http://localhost:5000/tasks) to view data in your browser.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

## 🧮 The Math / Philosophy

The greatest investment advisor of the twentieth century, Benjamin Graham, taught and inspired people worldwide. Graham's philosophy of "value investing" - which shields investors from substantial error and teaches them to develop long-term strategies - has made The Intelligent Investor the stock market bible ever since its original publication in 1949.
<br><br>
Over the years, market developments have proven the wisdom of Graham's strategies. 

### A Defensive Enterprising (active) Investor 

Since its so easy as an average investor to get the average of the market, it seems like if you invest more time you can beat the market. This is not quite the case and requires a lot more than that simple logic would make it seem to look.

Since the profits that companies can earn are finite, the price that the intelligent investor should pay should also be finite
Price is an important factor for the enterprising investor. Just like the market tends to overvalue companies when they have been growing fast or is flashy for some reason, it tends to undervalue things that have unsatisfactory development
So avoid growth stocks as much as possible

- The investment is based on future earnings. And future earnings are less reliable than current valuations

If you can find companies that is valued lower than its net working capital, you essentially pay nothing for its fixed assets such as building, machinery and goodwill

- Net working capital = total assets - Total liabilities 
- These types of investments proved truly profitable during Graham’s investment career, but they are really rare unless during tough bear markets

### Finding Investments

Finding investments for the enterprise investor, are similar to the defensive, but the constraints are looser. There is no constraint at all regarding the company size. And the number of companies isn’t carved into stone when it comes to diversification.

1.	Diversity has less constraints, and can be less than 10-30 companies
2.	Doesn’t have to be only large companies
3.	Conservatively financed – current ratio can be 150% instead of 200%
4.	Should analyze annual financial reports
a.	‘Interpretation of financial statements’
5.	Dividends – no missed dividends in the last year
6.	Earnings deficits – in the last 5 years instead of 10
7.	Earnings growth just has to be greater than 0% for 5 years
8.	Cheap assets – include tangible assets in your assets calc, and instead of 1.5x, use 1.2x
9.	Cheap earnings – out the window

### Margin of Safety
Insist on a margin of safety. There is one risk that no careful consideration can truly eliminate, and that is being wrong. You can minimize this, and to do this, you need to make sure that every investment has a margin of safety

The price and the value of a company isn’t always the same
When the price is at most 2/3rds of its calculated value the investor has adequate margin of safety. 
1.	Theres a formula in the book that help you evaluate a company and if it can be bought with a margin of safety
2.	Value of a company = current (normal) earnings * (8.5 + 2 * expected annual growth rate

Growth rate = expected yearly growth rate of earnings over 7-10 years

### Chart Summary:


Metric | Value | Notes
--- | --- | ---
Gross Yearly Sales | > 500m | 
Current Ratio | > 200% | **Current assets**: <br> `Current Assets = C + CE + I + AR + MS + PE + OLA` `C = Cash` `CE = Cash Equivalents` `I = Inventory` `AR = Accounts Receivable` `MS = Marketable Securities` `PE = Prepaid Expenses` `OLA = Other Liquid Assets` <br><br> **Current liabilities** <br> `Accounts payable` `Deferred tax liabilities` `Financial debt`
Dividend History | No missed dividends in 20 years | 
Earnings Deficit | None in the last 10 years | 
Earnings Growth | At least 33% growth in earning in the last 10 years ~ which is 2.9% growth annually |
Market Cap | | 
Net Current Asset Value | NCAV = Current Assets - Total Liabilities - Preferred Shares | `Balance Sheet` `Current assets` `Long term assets` `Current liabilities` `Long term liabilities` `Total liabilities` `Shareholder equity`

---

## 🔨  Improvements on the Application

Done:
1. First sample UI / components. Space theme. Set-up tests with sample ‘task’ data. Bulk horizontal layout looks good. Double click to favourite and ‘x’ to delete from view.

Todo:
1. Convert from json-server to MongoDB
2. Set-up Google Auth
3. Integrate with [finnhub.](https://finnhub.io/) and draw needed data
4. Define a 'Graham Number' and sort accrodingly
5. Hook up tradingview

---

 
 Have fun testing and improving it! 😎




