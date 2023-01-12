
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent} from '@testing-library/react'
import ScoreListItem from './score-list-item'
const tickerData = {"ticker":"MYCO","yearly":{"2015":-0.3641392409762019,"2016":-0.3455736217988077,"2017":-0.25905768983941174,"2018":-0.2519598651098156,"2019":-0.12954389581248177,"2020":-0.49410245891371063,"2021":-0.24082192091230167,"2022":-0.13780877976928116},"monthly":{"2022-12":null,"2022-11":-0.017672394216784813,"2022-10":-0.012359369430239318,"2022-09":-0.21380260255498904,"2022-08":-0.09587155725478229,"2022-07":-0.02503516599352922,"2022-06":-0.006179848081234595,"2022-05":-0.14914477723932776,"2022-04":-0.0684618981376437,"2022-03":-0.4793077285546386,"2022-02":-0.04368531650979841},"daily":{"2022-10-09":0.0214737160741884,"2022-10-10":0.0925037585011379,"2022-10-11":0.4666766241842955,"2022-10-12":0.68327153793705,"2022-10-13":0.5595018658688683,"2022-10-14":0.0969692939045942,"2022-10-15":-0.3151486264549414,"2022-10-16":-0.6437728091571353,"2022-10-17":-0.0028444218184243,"2022-10-18":0.1457835827825934,"2022-10-19":0.061785485384213,"2022-10-20":0.5845109399665338,"2022-10-21":0.1509001875144075,"2022-10-22":-0.5947990588742716,"2022-10-23":-0.1802122849579097,"2022-10-24":0.3515558928721227,"2022-10-25":0.5586024300612722,"2022-10-26":0.3467352689839217,"2022-10-27":0.2431486799634646,"2022-10-28":0.0827256358891594,"2022-10-29":-0.4084025526999975,"2022-10-30":-0.001837269845635,"2022-10-31":0.2084497646602632,"2022-11-01":0.1922646420910344,"2022-11-02":0.3608017244410306,"2022-11-03":0.360672342455188,"2022-11-04":0.0037519759023059,"2022-11-05":-0.619185976859191,"2022-11-06":-0.2770240864151034,"2022-11-07":-0.1449873811327582},"ranking":{"year":84,"month":27,"day":458}};
const props = { sort:"1", 
                data: tickerData,
                name: "My company",
                setOpen:jest.fn(),
                setCompany: jest.fn()
                }

describe('IndustrySelector', () => {
  it('checks if the company name exists', () => {
    render(<ScoreListItem {...props} />)
    const select = screen.getByText('My company')
    expect(select).toBeInTheDocument()
  })
  it('checks if the ticker symbol exists', () => {
    render(<ScoreListItem {...props} />)
    const select = screen.getByText('MYCO')
    expect(select).toBeInTheDocument()
  })
  it('checks if the score is shown', () => {
    render(<ScoreListItem {...props} />)
    const select = screen.getByText("Today's Score: -0.14")
    //expect(select).toBeInTheDocument()
  })
  it('checks if the change in rank is shown', () => {
    render(<ScoreListItem {...props} />)
    const select = screen.getByText("Rank change: -57")
    expect(select).toBeInTheDocument()
  })
})
