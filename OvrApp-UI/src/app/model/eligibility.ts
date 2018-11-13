export interface IEligibility {
  id: number;
  IsCitizen: string;
  IsFelon: string;
  IsMentalIncomp: string;
  NewRegistration: boolean;
  RecordUpdate: boolean;
  RequesttoReplace: boolean;
  DLNumber: string;
  LastSSN: string;
  // IssueDate: string;
  LastName: string;
  Firstname: string;
  MiddleName: string;
  Suffix: string;
   Dob: string;
 // Dob: Date;
}

export class CommonSetting {
  // static RecaptaSiteKey = '6Lc19nkUAAAAAGZeKmnuZXeW_uIJ2fDXVAuk8JCd';
 // static RecaptaSiteKey = '6LePfnoUAAAAAGmmR-hjC_wIO0fPvART5vm6NcCr';
  static RecaptaSiteKey = '6LedfnoUAAAAAMaqQkSNH2WIzVHaeifPt6nxwvpc';

}
