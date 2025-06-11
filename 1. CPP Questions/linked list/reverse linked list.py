class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def reverse_linked_list(head):
    # To reverse a linked list, you change the direction of the next pointers so that the list points backward instead of forward.

    prev = None
    current = head
    while current:
        next_node = current.next  # store next
        current.next = prev       # reverse pointer
        prev = current            # move prev forward
        current = next_node       # move current forward
    return prev  # new head



# example usage

# Helper to create and print a list
def print_list(head):
    while head:
        print(head.data, end=" -> ")
        head = head.next
    print("None")

# Create linked list: 1 -> 2 -> 3 -> None
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)

print("Original:")
print_list(head)

reversed_head = reverse_linked_list(head)

print("Reversed:")
print_list(reversed_head)
