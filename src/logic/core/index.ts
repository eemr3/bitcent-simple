import { Authentication } from '../firebase/auth/authentication';
import { FinaceService } from './finance/financeService';

class Service {
  get finaceService() {
    return new FinaceService();
  }

  get authService() {
    return new Authentication();
  }
}

export const service = new Service();
