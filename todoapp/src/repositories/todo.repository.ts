import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MangoDsDataSource} from '../datasources';
import {Todo, TodoRelations} from '../models';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(
    @inject('datasources.mangoDS') dataSource: MangoDsDataSource,
  ) {
    super(Todo, dataSource);
  }
}
