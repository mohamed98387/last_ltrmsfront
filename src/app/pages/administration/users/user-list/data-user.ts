import { UserService } from "src/app/services/user.service";
import { Observable, Subscription } from "rxjs";
import { BehaviorSubject } from "rxjs";

const tableData = [];
/*export function fetchTableData(
  userService: UserService,
  newTableSubscription: Subscription
): void {
  newTableSubscription = userService.getUsers().subscribe(
    (res) => {
      console.log(res);
      tableData.splice(0, tableData.length); // Clear the array
      tableData.push(...res); // Push the new items into the array
    },
    (error) => {
      console.error("Error fetching data:", error);
    }
  );
}*/
export { tableData };
