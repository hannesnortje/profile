export interface MapDetails {
  marker?: number[];
  rectangle?: number[][];
  name: string
}

export interface Timeline {
    heading: string;
    description?: string;
    startYear: number;
    endYear?: number
    elaboration?: string[]
    mapDetails?: MapDetails
  }