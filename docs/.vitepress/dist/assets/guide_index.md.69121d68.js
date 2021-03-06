import{o as e,c as s,a as t}from"./app.f9a5af35.js";const a='{"title":"What is vuse-rx?","description":"","frontmatter":{},"headers":[{"level":2,"title":"Why?","slug":"why"}],"relativePath":"guide/index.md","lastUpdated":1614989123028}',o={},i=t('<h1 id="what-is-vuse-rx"><a class="header-anchor" href="#what-is-vuse-rx" aria-hidden="true">#</a> What is vuse-rx?</h1><p><code>vuse-rx</code> is a bridge library: it connects vue&#39;s reactive states and refs with rxjs observables and subjects in a way that enforces separation of concerns and reduces boilerplate code.</p><p>The goal of <code>vuse-rx</code> is simply to make using rxjs in Vue 3 easier.<br> Thanks to the approach <code>vuse-rx</code> takes, it&#39;s very easy to structure reactive business logic while also separating it from views.<br><code>vuse-rx</code> elevates abstraction level above the manual creation of observables and subjects from events and callbacks, which allows to declaratively define the rules by which an application operates and simply use them as plain functions (while also giving full control over resulting observables should you ever need it).</p><p>In it&#39;s approach to concern separation, <code>vuse-rx</code> is very similar to <code>vuex</code> and other flux libraries, by separating components from state and state from reducers/actions.<br> However, the big difference is that <code>vuse-rx</code> treats both rxjs <strong>observables</strong> and vue&#39;s own <strong>reactive objects</strong> as <strong>first-class citizens</strong> instead of focusing only on one or the other.<br> This results in a seamless transition form reactive states to observables and vice versa throughout the application.</p><h2 id="why"><a class="header-anchor" href="#why" aria-hidden="true">#</a> Why?</h2><p>Current approach to using rxjs in Vue 3 (or even Vue 2) boils down to throwing away Vue&#39;s features, where rxjs is used, and replacing them with either native DOM APIs (using <code>fromEvent</code> and <code>addEventListener</code>) on direct html element refs, or creating simple subjects which are updated on specific occasions.</p><p>The first approach feels tedious and low-level, while the other is often limiting and, well, also tedious.</p><p><code>vuse-rx</code> allows to reap all of the pros from both ways without any of the cons, while also adding some more pros on top of that:</p><ul><li>Ease of integrating application logic;</li><li>Ease of use (most of the time - as simlpe as calling one function);</li><li>Seamless integration between Vue&#39;s reactivity and flexibility of rxjs;</li><li>Ability to use &quot;native&quot; Vue APIs in harmony with observables;</li><li>First-class TypeScript support;</li><li><a href="/api/use-rx-state.html">Sane state management</a> out-of the box;</li></ul><p>Thanks to that last one, <code>vuse-rx</code> also eliminates the need to use <code>vuex</code> for most projects that already use <code>rxjs</code>!</p>',10);o.render=function(t,a,o,r,n,l){return e(),s("div",null,[i])};export default o;export{a as __pageData};