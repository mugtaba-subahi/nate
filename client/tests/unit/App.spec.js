import { shallowMount } from '@vue/test-utils';
import Table from '../../components/Table.vue';

describe('Table.vue', () => {
  it('should render table props when passed', () => {
    const content = [
      { word: 'jim', count: 1 },
      { word: 'bob', count: 2 },
      { word: 'steve', count: 2 }
    ];

    const wrapper = shallowMount(Table, {
      propsData: { content }
    });

    expect(wrapper.text()).toContain('Word');
    expect(wrapper.text()).toContain('Count');
    expect(wrapper.text()).toContain('jim');
    expect(wrapper.text()).toContain('bob');
    expect(wrapper.text()).toContain('steve');
  });
});
