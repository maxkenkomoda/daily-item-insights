import moment from "moment";
import { itemRecord, Items } from "../index.d";

type boughtTimesAndNumbers = {
  boughtDate: moment.Moment,
  number: number
}

export class AnalyticRecords {
  public static async calculateAverage(allRecords: itemRecord[], itemNumber: number) {
    const dataList = this.createNewArray(allRecords, itemNumber)
    const results: number[] = []
    for(let i = 1; i<dataList.length; i++) {
      const previousDate = dataList[i - 1].boughtDate
      const currentDate = dataList[i].boughtDate
      const usedNumber = dataList[i - 1].number
      const result = currentDate.diff(previousDate, 'days') / usedNumber
      results.push(result)
    }
    let sum = 0
    results.forEach(n => {
      sum = sum + n
    })
    const averageDay = sum / results.length
    const recommendDate = dataList[dataList.length - 1].boughtDate.add(averageDay, 'days').format()
    return recommendDate
  }

  private static createNewArray(allRecords: itemRecord[], itemNumber: number) {
    const boughtTimes: boughtTimesAndNumbers[] = []
    allRecords.forEach(record => {
      boughtTimes.push({
        boughtDate: moment(record.bought_time),
        number: record.number
      })
    })
    const now = moment()
    boughtTimes.push({
      boughtDate: now,
      number: itemNumber
    })
    return boughtTimes
  }
}
