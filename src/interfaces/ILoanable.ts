export interface ILoanable {
  borrow(): void;
  return(): void;
  isAvailable: boolean;
}
