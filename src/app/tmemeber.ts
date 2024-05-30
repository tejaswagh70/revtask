import { Projecttable } from "./projecttable";


export interface Tmemeber {
    id: number; // Make id optional
    name: string;
    email: string;
    password: string;
    project?: Projecttable[];
  }
  
