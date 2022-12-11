export type CvDataResp = CvData[];

export interface CvData {
  id: number;
  fullname: string;
  country: string;
  languages: string;
  cvjson: CVJSON;
  cvfile?: any | null;
  avata: string;
  linkedinurl?: string;
  website?: any | null;
  time: string;
}

export interface CVJSON {
  skills: string[];
  education: Education[];
  experiences: Experience[];
  userProfile: UserProfile;
}

export interface Education {
  endDate: string;
  startDate: string;
  degreeName: string;
  schoolName: string;
  fieldOfStudy: string;
}

export interface Experience {
  title: string;
  company: string;
  endDate: string;
  location: string;
  startDate: string;
  description: string;
  endDateIsPresent: boolean;
}

export interface UserProfile {
  url: string;
  photo: string;
  title: string;
  fullName: string;
  location: Location;
  description: string;
}

export interface Location {
  city: string;
  country: string;
}
