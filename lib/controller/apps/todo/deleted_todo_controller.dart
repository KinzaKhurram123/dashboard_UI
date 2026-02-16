import 'package:get/get.dart';
import 'package:webui/models/todo_model.dart';
import 'package:webui/views/apps/todo/todo_cache.dart';

class DeletedTodoController extends GetxController {
  void onPermanentDelete(TodoModel id) {
    TodoCache.deleteTodo.remove(id);
    update();
  }
}
