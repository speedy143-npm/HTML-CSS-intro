
            const panels = document.querySelectorAll('.pane1');

            function toggleOption() {
                this.classList.toggle('open');
               // this.classList.toggle('open-active');
            }

            function toggleActive(e) {
               if (e.propertyName === 'flex-grow'){
                    this.classList.toggle('open-active');
                    console.log(this)
               }
            }

            panels.forEach(pane1 => pane1.addEventListener('click', toggleOption));

            panels.forEach(pane1 => pane1.addEventListener('transitionend', toggleActive));
        