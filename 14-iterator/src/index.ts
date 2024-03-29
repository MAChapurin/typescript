class Task {
  public id: number;
  public date: string;
  public title: string;
  constructor(id: number, title: string, date: string) {
    this.id = id;
    this.title = title;
    this.date = date;
  }
}

class TaskList {
  private tasks: Task[] = [];

  public formatDateForRussian(date: string): Date {
    const [year, month, day]: number[] = date.split('-').reverse().map(el => Number(el));
    return new Date(year as number, month as number, day)
  }

  public sortById(directionSort: DirectionSortType = 'down') {
    this.tasks = this.tasks.sort((a, b) => {
      if (a.id > b.id) {
        return directionSort === 'up' ? -1 : 1;
      } else if (a.id === b.id) {
        return 0;
      } else {
        return directionSort === 'up' ? 1 : -1;
      }
    });
  }

  public sortByDate(directionSort: DirectionSortType = 'down') {
    const fn = this.formatDateForRussian
    this.tasks = this.tasks.sort((a: Task, b: Task): number => {
      if (new Date(fn(a.date)).getTime() > new Date(fn(b.date)).getTime()) {
        return directionSort === 'up' ? -1 : 1;
      } else if (new Date(fn(a.date)).getTime() === new Date(fn(b.date)).getTime()) {
        return 0;
      } else {
        return directionSort === 'up' ? 1 : -1;
      }
    });
  }

  public addTask(task: Task) {
    this.tasks.push(task);
  }

  public getTasks() {
    return this.tasks;
  }

  public count(): number {
    return this.tasks.length;
  }

  public getIterator(property: keyof Task, directionSort: DirectionSortType = 'down') {
    return new TaskIterator(this, property, directionSort);
  }
}

interface IIterator<T> {
  current(): T | undefined;
  next(): T | undefined;
  prev(): T | undefined;
  index(): number;
}

type DirectionSortType = 'up' | 'down';

class TaskIterator implements IIterator<Task> {
  private position: number = 0;
  private taskList: TaskList;

  constructor(taskList: TaskList, prop: keyof Task, directionSort: DirectionSortType) {
    this.taskList = taskList;
    switch (prop) {
      case 'id':
        taskList.sortById(directionSort);
        break;
      case 'date':
        taskList.sortByDate(directionSort);
        break
      default:
        return;
    }
  }
  current(): Task | undefined {
    return this.taskList.getTasks()[this.position];
  }
  next(): Task | undefined {
    this.position += 1;
    return this.taskList.getTasks()[this.position];
  }
  prev(): Task | undefined {
    this.position -= 1;
    return this.taskList.getTasks()[this.position];
  }
  index(): number {
    return this.position;
  }
}

const taskStore = new TaskList();
taskStore.addTask(new Task(4, 'task 4', '04-11-2023'));
taskStore.addTask(new Task(1, 'task 1', '02-09-2023'));
taskStore.addTask(new Task(2, 'task 2', '01-10-2023'));
taskStore.addTask(new Task(3, 'task 3', '21-12-2023'));
taskStore.addTask(new Task(5, 'task 5', '19-08-2023'));
taskStore.addTask(new Task(7, 'task 7', '10-11-2023'));
taskStore.addTask(new Task(8, 'task 8', '12-08-2024'));
taskStore.addTask(new Task(6, 'task 6', '12-09-2023'));

console.log('='.repeat(55));
console.log('Исходный список задач');
console.log('='.repeat(55));
console.log(taskStore.getTasks());

const iteratorIdGrow = taskStore.getIterator('id');

console.log('='.repeat(55));
console.log('Работа итератора id по возрастанию');
console.log('='.repeat(55));
// console.log(iteratorIdGrow.current())
console.log(iteratorIdGrow.next())
console.log(iteratorIdGrow.next())
console.log(iteratorIdGrow.next())
console.log(iteratorIdGrow.prev())
console.log(iteratorIdGrow.next())

const iteratorIddirectionSort = taskStore.getIterator('id', 'up');

console.log('='.repeat(55));
console.log('Работа итератора id по убыванию');
console.log('='.repeat(55));

console.log(iteratorIddirectionSort.next());
console.log(iteratorIddirectionSort.next());
console.log(iteratorIddirectionSort.next());
console.log(iteratorIddirectionSort.next());
console.log(iteratorIddirectionSort.prev());
console.log(iteratorIddirectionSort.prev());
console.log(iteratorIddirectionSort.prev());

const iteratorDateGrow = taskStore.getIterator('date');

console.log('='.repeat(55));
console.log('Работа итератора дата по возрастанию');
console.log('='.repeat(55));

console.log(iteratorDateGrow.next());
console.log(iteratorDateGrow.next());
console.log(iteratorDateGrow.next());
console.log(iteratorDateGrow.next());
console.log(iteratorDateGrow.next());
console.log(iteratorDateGrow.prev());
console.log(iteratorDateGrow.prev());
console.log(iteratorDateGrow.prev());
console.log(iteratorDateGrow.prev());
console.log(iteratorDateGrow.current());

const iteratorDatedirectionSort = taskStore.getIterator('date', 'up');

console.log('='.repeat(55));
console.log('Работа итератора дата по убыванию');
console.log('='.repeat(55));

console.log(iteratorDatedirectionSort.next());
console.log(iteratorDatedirectionSort.next());
console.log(iteratorDatedirectionSort.next());
console.log(iteratorDatedirectionSort.next());
console.log(iteratorDatedirectionSort.next());
console.log(iteratorDatedirectionSort.prev());
console.log(iteratorDatedirectionSort.prev());
console.log(iteratorDatedirectionSort.prev());
console.log(iteratorDatedirectionSort.prev());

