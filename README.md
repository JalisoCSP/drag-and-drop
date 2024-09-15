Playing around with drag and drop in stimulus

Learnt about Stimulus private functions, transfering data and some unexpected drag and drop interactions.

Some usage of Writebook's arrangement controller:
https://github.com/JalisoCSP/writebook/blob/main/app/javascript/controllers/arrangement_controller.js

Issues:
* Drop event doesn't happen if you don't drop on top of another LI (must need to add some sort of drop area that covers the whole dropzone, should not be relying on each element)
* Doesn't actually save the change, just moves the HTML (perform reorder request + use Turbo)
