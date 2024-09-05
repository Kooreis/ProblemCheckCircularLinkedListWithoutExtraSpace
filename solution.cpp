```cpp
#include <iostream>

struct Node {
    int data;
    Node* next;
};

bool isCircular(Node* head) {
    if (head == NULL) {
        return true;
    }

    Node* node = head->next;

    while (node != NULL && node != head) {
        node = node->next;
    }

    return (node == head);
}

Node* newNode(int data) {
    Node* temp = new Node();
    temp->data = data;
    temp->next = NULL;
    return temp;
}

int main() {
    Node* head = newNode(1);
    head->next = newNode(2);
    head->next->next = newNode(3);
    head->next->next->next = newNode(4);

    std::cout << isCircular(head) << std::endl;

    head->next->next->next->next = head;

    std::cout << isCircular(head) << std::endl;

    return 0;
}
```