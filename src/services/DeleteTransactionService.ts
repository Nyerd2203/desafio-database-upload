// import AppError from '../errors/AppError';

import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const deleteTransaction = await transactionRepository.findOne(id);
    if (!deleteTransaction) {
      throw new AppError('Transaction not found!');
    }

    await transactionRepository.remove(deleteTransaction);
  }
}

export default DeleteTransactionService;
