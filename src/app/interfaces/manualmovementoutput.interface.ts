import { ProductOutput } from "./productoutput.interface";

export interface ManualMovementOutput {
  monthOfYear: number;
  year: number;
  product: ProductOutput;
  noteNumber: number;
  value: number;
  description: string;
}

	
