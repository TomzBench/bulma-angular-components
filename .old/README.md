# Usage (Inputs)
```
<div b-field="Name">
  <input b-input
         [icon]="'user'"
	 [iconRight]="'check'"
	 [loading]="true">
</div>
<div b-field="Email">
  <input b-input
         [icon]="'envelope'"
	 [iconRight]="'check'"
	 [class]="'danger'"
	 [help]="'Invalid!'">
</div>
```

# Usage Inputs (Horizontal)
```
<div b-field="Name"
     [horizontal]="true">
  <input b-input
         [icon]="'user'"
	 [iconRight]="'check'"
	 [loading]="true">
  <input b-input
         [icon]="'envelope'"
	 [iconRight]="'check'"
	 [loading]="false">
</div>
```

# Usage Tabs
```
<div b-tabs>
  <div b-tabs-item="Status">
    <app-status></app-status>
  </div>
  <div b-tabs-item="Network">
    <app-network></app-network>
  </div>
  <div b-tabs-item="Hardware">
    <app-hardware></app-hardware>
  </div>
</div>
```

# QuickStart (Use external app)

ng new my-app --style=scss
cd my-app
npm install "file:path/to/bulma-angular-components"
npm install bulma
Add @import '~bulma/bulma' to src/styles/styles.scss
Add @import your font icon package (IE @import '~font-awesome/css/font-awesome.min.css')
(Note if font-awesome is not your default icons, TODO configure icon-pack)
