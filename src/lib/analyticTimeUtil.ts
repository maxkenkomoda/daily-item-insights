import { itemRecord, Items } from "../index.d";

export class AnalyticRecords {
  public static async calculateAverage(allRecords: itemRecord[]) {
    const boughtTimes = []
    allRecords.forEach(record => {
      boughtTimes.push(record.bought_time)
    })
  }
}
