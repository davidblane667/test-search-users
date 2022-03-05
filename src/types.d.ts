export interface User {
  value: string;
  unrestricted_value: string;
  data: {
    surname: string | null;
    name: string;
    patronymic: string | null;
    gender: string;
    source: null;
    qc: string;
  };
}

export interface UserPublicData {
  suggestions: User[];
}
